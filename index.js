const puppeteer = require("puppeteer-core");
const containerized = require("containerized");

const MY_PACKAGE_SELECTOR_ID =
  'table[style="margin-top:-10px;"] tr:first-child+tr';
const DATA_SELECTOR = "packagecol3";
const MY_ACCOUNT_URL = "https://selfcare.actcorp.in/group/blr/myaccount";
const DATA_USAGE_REGEX = /\d+\.\d{0,2}/g;
const KEYS = ["live", "flexibytes"];

var browser;

async function getUsage() {
  if (!browser) {
    throw new Error("Browser not launched yet");
  }
  const page = await browser.newPage();

  let defaultMetric = {
    usedBytes: null,
    totalBytes: null
  };

  let metrics = {
    live: defaultMetric,
    flexibytes: defaultMetric,
    aggregate: defaultMetric
  };

  try {
    await page.goto(MY_ACCOUNT_URL, {timeout: 10000});
    await page.waitForTimeout(5000);
    await page.waitForSelector(MY_PACKAGE_SELECTOR_ID)
    await page.click(MY_PACKAGE_SELECTOR_ID);
    // Wait for the page to switch
    await page.waitForFunction(()=>{
      return document.querySelector(".dtl-header-text").innerText === "My Package" &&
      document.getElementById('_ACTMyAccount_WAR_ACTMyAccountportlet_:processingPanel').style.display === 'none'
    });

    dataUsage = await page.evaluate(sel => {
      let elements = document.getElementsByClassName(sel);

      if (!elements || elements.length < 4) {
        return "0.00 0.00";
      }
      let usage = {
        live: elements[3].innerText,
        aggregate: "0.00 GB (Quota 800.00 GB)"
      };
      if (elements.length >= 6) {
        usage["flexibytes"] = elements[5].innerText;
      }
      return usage;
    }, DATA_SELECTOR);

    // ['0.00 GB (Quota 800.00 GB)', '102.58 GB(Quota 100.00 GB)']
    KEYS.map(key => {
      dataUsage[key] = dataUsage[key]
        .match(DATA_USAGE_REGEX)
        .map(x => parseFloat(x) * Math.pow(10, 6));
    });
    dataUsage.aggregate = { usedBytes: 0, totalBytes: 0 };

    KEYS.map(key => {
      dataUsage[key] = {
        usedBytes: dataUsage[key][0],
        totalBytes: dataUsage[key][1]
      };
      dataUsage.aggregate.usedBytes += dataUsage[key].usedBytes;
      dataUsage.aggregate.totalBytes += dataUsage[key].totalBytes;
    });

    metrics = dataUsage;
    return metrics
  } catch (e) {
    console.log(e)
    throw new Error("Failed scraping data from ACT");
  } finally {
    page.close();
  }
}

function chromeLaunchConfig() {
  let defaultArgs = [];
  if (containerized()) {
    defaultArgs = ["--no-sandbox", "--disable-setuid-sandbox"];
  }
  var options = {
    // These are set for Docker usage
    // https://github.com/alekzonder/docker-puppeteer#before-usage
    args: defaultArgs.concat(
      process.env.hasOwnProperty("PROXY_SERVER")
        ? [`--proxy-server=${process.env["PROXY_SERVER"]}`]
        : []
    )
  };

  if (process.env.hasOwnProperty("DISABLE_HEADLESS")) {
    options.headless = false;
  }

  if (process.env.hasOwnProperty("CHROME_BIN")) {
    options.executablePath = process.env["CHROME_BIN"];
  }

  console.log("Launching Chrome with args:");
  console.log(options);

  return options;
}

module.exports = {
  getUsage: getUsage,
  onReady: async (cb)=>{
    browser = await puppeteer.launch(chromeLaunchConfig());
    console.log("Browser Initialized");
    cb(browser)
  }
};

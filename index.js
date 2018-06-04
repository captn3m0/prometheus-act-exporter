const puppeteer = require('puppeteer');

const MY_PACKAGE_SELECTOR_ID =
  'table[style="margin-top:-10px;"] tr:first-child+tr';
const DATA_SELECTOR = 'packagecol3';

const DATA_USAGE_REGEX = /\d+\.\d{0,2}/g;
var browser;

async function getUsage() {
  let metrics = {
    used: null,
    total: null,
  };

  const page = await browser.newPage();

  try {
    await page.goto('http://portal.actcorp.in/group/blr/myaccount');
    await page.click(MY_PACKAGE_SELECTOR_ID);
    await page.waitFor(3000),
      (text = await page.evaluate(sel => {
        return document.getElementsByClassName(sel)[3].innerText;
      }, DATA_SELECTOR));
    [metrics.used, metrics.total] = text
      .match(DATA_USAGE_REGEX)
      .map(x => parseFloat(x));
  } catch (e) {
    console.log("Couldn't scrape ACT page, faced an error");
    console.log(e);
    return null;
  } finally {
    page.close();
    return metrics;
  }
}

function chromeLaunchConfig() {
  var options = {
    args: ['--no-sandbox', '--disable-setuid-sandbox'].concat(
      process.env.hasOwnProperty('PROXY_SERVER')
        ? [`--proxy-server=${process.env['PROXY_SERVER']}`]
        : []
    ),
  };

  if (process.env.hasOwnProperty('DISABLE_HEADLESS')) {
    options.headless = false;
  }

  if (process.env.hasOwnProperty('CHROME_BIN')) {
    options.executablePath = process.env['CHROME_BIN'];
  }

  console.log('Launching Chrome with args:');
  console.log(options);

  return options;
}

// Async IIFE FTW
(async () => {
  browser = await puppeteer.launch(chromeLaunchConfig());
  console.log('Browser Initialized');
})();

module.exports = {
  getUsage: getUsage,
};

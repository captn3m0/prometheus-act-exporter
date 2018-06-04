const puppeteer = require('puppeteer');

const MY_PACKAGE_SELECTOR_ID =
  'table[style="margin-top:-10px;"] tr:first-child+tr';
const DATA_SELECTOR = 'packagecol3';

const REGEX = /\d+\.\d{0,2}/g;

async function getUsage() {
  var options = {
    executablePath:
      process.env['CHROME_BIN'] || '/usr/bin/chromium-snapshot-bin',
    args: ['--no-sandbox', '--disable-setuid-sandbox'].concat(
      process.env.hasOwnProperty['PROXY_SERVER']
        ? [`--proxy-server=${process.env['PROXY_SERVER']}`]
        : []
    ),
  };

  let metrics = {
    used: null,
    total: null,
  };

  try {
    const page = await browser.newPage();
    await page.goto('http://portal.actcorp.in/group/blr/myaccount');
    await page.click(MY_PACKAGE_SELECTOR_ID);
    await page.waitFor(3000),
      (text = await page.evaluate(sel => {
        return document.getElementsByClassName(sel)[3].innerText;
      }, DATA_SELECTOR));
    [metrics.used, metrics.total] = text.match(REGEX).map(x => parseFloat(x));
  } catch (e) {
    console.log("Could'nt scrape ACT page, faced an error");
  } finally {
    page.close();
    return metrics;
  }
}

(async () => {
  const browser = await puppeteer.launch(args);
  module.exports = {
    getUsage: getUsage,
  };
})();

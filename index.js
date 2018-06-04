const puppeteer = require('puppeteer');

const MY_PACKAGE_SELECTOR_ID =
  'table[style="margin-top:-10px;"] tr:first-child+tr';
const DATA_SELECTOR = 'packagecol3';

const REGEX = /\d+\.\d{0,2}/g;

async function getUsage() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-snapshot-bin',
    args: ['--proxy-server=socks5://10.8.0.14:1080'],
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto('http://portal.actcorp.in/group/blr/myaccount');
  await page.click(MY_PACKAGE_SELECTOR_ID);
  await page.waitFor(3000),
    (text = await page.evaluate(sel => {
      return document.getElementsByClassName(sel)[3].innerText;
    }, DATA_SELECTOR));

  browser.close();

  [used, total] = text.match(REGEX).map(x => parseFloat(x));

  return {
    used: used,
    total: total,
  };
}

module.exports = {
  getUsage: getUsage,
};
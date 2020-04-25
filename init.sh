#!/bin/sh
export CHROME_REVISION=$(node -e "console.log(require('/usr/local/share/.config/yarn/global/node_modules/puppeteer/package.json')['puppeteer']['chromium_revision'])")
export CHROME_BIN="/usr/local/share/.config/yarn/global/node_modules/puppeteer/.local-chromium/linux-$CHROME_REVISION/chrome-linux/chrome"
env
ls -lah $CHROME_BIN
echo $CHROME_BIN
/usr/local/bin/node server.js $@

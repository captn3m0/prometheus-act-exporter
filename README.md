# prometheus-act-exporter

Exposes your current ACT FUP usage as prometheus metrics. Scrapes the data from the ACT Portal website by using puppeteer.

-   Does not support flexibytes yet.
-   Only tested for ACT Bangalore connections.

## Metrics

Sample:

```
# HELP act_fup_usage_gigabytes_total ACT current usage in GB
# TYPE act_fup_usage_gigabytes_total gauge
act_fup_usage_gigabytes_total 41.42

# HELP act_fup_max_gigabytes_total ACT FUP limit in GB
# TYPE act_fup_max_gigabytes_total gauge
act_fup_max_gigabytes_total 500
```

# Using as a npm package

Install it with `npm i prometheus-act-exporter`.

```js
const act = require('prometheus-act-exporter')
let m = await act.getUsage();
console.log(m)
// Returns
//
// {
//    used: 2.34,
//    total: 150,
//  }
//  All values in GB
```

# Configuration

You can pass the following environment variables:

1.  `PROXY_SERVER`: Use a proxy server to connect to ACT. Use a `socks5` proxy, since ACT returns a 403 if you try to use a CONNECT proxy. `export PROXY_SERVER="socks5://10.8.0.14:1080"`
2.  `CHROME_BIN`: Set Chrome/Chromium executable path.
3.  `DISABLE_HEADLESS`: If set, chrome will not launch in headless mode.

# LICENSE

This is licensed under WTFPL. See COPYING file for the full text.

The canonical URL for this project is <https://git.captnemo.in/nemo/prometheus-act-exporter>.

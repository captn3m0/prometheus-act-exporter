# prometheus-act-exporter

Exposes your current ACT FUP usage as prometheus metrics. Scrapes the data from the ACT Portal website by using puppeteer.

-   Does not support flexibytes yet (PRs welcome)
-   Only tested for ACT Bangalore connections.

## Metrics

Sample:

```
# HELP act_fup_usage_bytes ACT current usage in bytes (precision GB)
# TYPE act_fup_usage_bytes gauge
act_fup_usage_bytes 41.42

# HELP act_fup_max_bytes ACT FUP limit in bytes (precision GB)
# TYPE act_fup_max_bytes gauge
act_fup_max_bytes 500
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
//    used: 102.92,
//    total: 500,
//    usedBytes: 102920000,
//    totalBytes: 500000000
//  }
//  used/total are in GB, other 2 are in bytes
// calculations made assuming ACT is using SI GB (exactly 1 billion bytes)
```

# Configuration

You can pass the following environment variables:

1.  `PROXY_SERVER`: Use a proxy server to connect to ACT. Use a `socks5` proxy, since ACT returns a 403 if you try to use a CONNECT proxy. `export PROXY_SERVER="socks5://10.8.0.14:1080"`
2.  `CHROME_BIN`: Set Chrome/Chromium executable path.
3.  `DISABLE_HEADLESS`: If set, chrome will not launch in headless mode.

# LICENSE

This is licensed under WTFPL. See COPYING file for the full text.

The canonical URL for this project is <https://git.captnemo.in/nemo/prometheus-act-exporter>.

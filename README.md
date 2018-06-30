# prometheus-act-exporter

Exposes your current ACT FUP usage as prometheus metrics. Scrapes the data from the ACT Portal website by using puppeteer.

-   Supports flexibytes
-   Reports aggregate metrics as well
-   Only tested for ACT Bangalore connections.

## Metrics

Sample:

```
# HELP act_fup_live_usage_bytes ACT live usage in bytes (precision GB)
# TYPE act_fup_live_usage_bytes gauge
act_fup_live_usage_bytes 0

# HELP act_fup_live_total_bytes ACT live usage in bytes (precision GB)
# TYPE act_fup_live_total_bytes gauge
act_fup_live_total_bytes 800000000

# HELP act_fup_flexibytes_usage_bytes ACT flexibytes usage in bytes (precision GB)
# TYPE act_fup_flexibytes_usage_bytes gauge
act_fup_flexibytes_usage_bytes 102580000

# HELP act_fup_flexibytes_total_bytes ACT flexibytes usage in bytes (precision GB)
# TYPE act_fup_flexibytes_total_bytes gauge
act_fup_flexibytes_total_bytes 100000000

# HELP act_fup_aggregate_usage_bytes ACT aggregate usage in bytes (precision GB)
# TYPE act_fup_aggregate_usage_bytes gauge
act_fup_aggregate_usage_bytes 102580000

# HELP act_fup_aggregate_total_bytes ACT aggregate usage in bytes (precision GB)
# TYPE act_fup_aggregate_total_bytes gauge
act_fup_aggregate_total_bytes 900000000
```

# Using as a npm package

Install it with `npm i prometheus-act-exporter`.

```js
const act = require('prometheus-act-exporter')
let m = await act.getUsage();
// Returns
// {
//   live: { usedBytes: 0, totalBytes: 800000000 },
//   flexibytes: { usedBytes: 102580000, totalBytes: 100000000 },
//   aggregate: { usedBytes: 102580000, totalBytes: 900000000 }
// }
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

# prometheus-act-exporter

![Docker Image Version (latest semver)](https://img.shields.io/docker/v/captn3m0/prometheus-act-exporter) ![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/captn3m0/prometheus-act-exporter) [![npm version](https://badge.fury.io/js/prometheus-act-exporter.svg)](https://badge.fury.io/js/prometheus-act-exporter) [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-blue.svg)](http://www.wtfpl.net/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Exposes your current ACT FUP usage as prometheus metrics. Scrapes the data from the ACT Portal website by using [puppeteer](https://developers.google.com/web/tools/puppeteer/). This only supports [ACT Fibernet](https://www.actcorp.in/) in India.

- Supports flexibytes
- Reports aggregate metrics as well
- Only tested for ACT Bangalore connections.

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
const act = require("prometheus-act-exporter");
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
2.  `CHROME_BIN`: Set Chrome/Chromium executable path. Helpful if you have chromium already installed and don't want puppeteer to download it again. You can set `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1` before running `npm install` to disable puppeteer's chromium download.
3.  `DISABLE_HEADLESS`: If set, chrome will not launch in headless mode.

# Usage

## Docker

If running via Docker, here are some simple cookbook configurations:

`docker run -it -p 3000:3000 -e captn3m0/prometheus-act-exporter`

Run a simple test server locally in debug mode and test it on `http://localhost:3000/metrics`

# LICENSE

This is licensed under WTFPL. See COPYING file for the full text.

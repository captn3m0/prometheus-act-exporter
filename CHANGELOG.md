# CHANGELOG

# 2.0.5

- Upgrade puppeteer to 1.17.0

# 2.0.4

- Upgrade puppeteer to 1.16.0

# 2.0.3

- Upgrade puppeteer to 1.15.0
- Switches docker base image from `alekzonder/puppeteer` to `schliflo/docker-puppeteer` since the former is unmaintained

# 2.0.2

- Upgrade puppeteer to 1.8.0

# 2.0.0-beta

- Adds support for Flexibytes and aggregate metrics
- Standardized Prometheus formatting to support 3 categories: `live/flexibytes/aggregate`
- Added standard [schema labels](http://label-schema.org/) in Dockerfile
- Upgraded puppeteer to 1.5.0
- Changed return format of `.getUsage()` method

# 1.0.2

- Switches to bytes as the unit in the metrics endpoint
- Removed `_total` as suffix from the metric labels
- The API now returns 2 extra fields: `usedBytes/totalBytes`
- Now added to the [Prometheus Miscellaneous Exporters list](https://prometheus.io/docs/instrumenting/exporters/#miscellaneous)

# 1.0.1

- Fixes a bug with only the first request giving a 200 on the metrics endpoint
- Pre-build docker image available at `captn3m0/prometheus-act-exporter`
- Disables Chrome sandbox only if running inside a container

# 1.0.0

- Initial version

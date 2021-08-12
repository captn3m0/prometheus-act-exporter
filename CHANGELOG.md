# CHANGELOG

# 3.0.1
## Changed
- Puppeteer update

# 3.0.0
## Changed
- Dependency updates
- Changed timeout to 5 seconds for page load (was set to default of 30 seconds)
- Adds caching so it returns the last best response instead of a 500
## Fixed
- Breaking API Change: Returned promise now works better by throwing errors in case of failures (instead of returning null)

# 2.0.13
## Changed
- Dependency updates

# 2.0.12
## Changed
- Dependency updates

# 2.0.11
## Changed
- Dependency updates

# 2.0.9
## Changed
- Bumps puppeteer to 3.0.1

# 2.0.0
## Changed
- Bumps puppeteer to `1.20.0`

# 2.0.7
## Changed
- Bumps puppeteer to `1.18.0`

# 2.0.6
## Changed
- Dependency updates and Docker fixes

# 2.0.5
## Changed
- Upgrade puppeteer to 1.17.0

# 2.0.4
## Changed
- Upgrade puppeteer to 1.16.0

# 2.0.3
## Changed
- Upgrade puppeteer to 1.15.0
- Switches docker base image from `alekzonder/puppeteer` to `schliflo/docker-puppeteer` since the former is unmaintained

# 2.0.2
## Changed
- Upgrade puppeteer to 1.8.0

# 2.0.0-beta
## Changed
- Adds support for Flexibytes and aggregate metrics
- Standardized Prometheus formatting to support 3 categories: `live/flexibytes/aggregate`
- Added standard [schema labels](http://label-schema.org/) in Dockerfile
- Upgraded puppeteer to 1.5.0
- Changed return format of `.getUsage()` method

# 1.0.2
## Changed
- Switches to bytes as the unit in the metrics endpoint
- Removed `_total` as suffix from the metric labels
- The API now returns 2 extra fields: `usedBytes/totalBytes`
- Now added to the [Prometheus Miscellaneous Exporters list](https://prometheus.io/docs/instrumenting/exporters/#miscellaneous)

# 1.0.1
## Changed
- Fixes a bug with only the first request giving a 200 on the metrics endpoint
- Pre-build docker image available at `captn3m0/prometheus-act-exporter`
- Disables Chrome sandbox only if running inside a container

# 1.0.0
## Changed
- Initial version

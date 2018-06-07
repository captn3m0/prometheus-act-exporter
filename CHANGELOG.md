# CHANGELOG

# 1.0.2

-   Switches to bytes as the unit in the metrics endpoint
-   Removed `_total` as suffix from the metric labels
-   The API now returns 2 extra fields: `usedBytes/totalBytes`
-   Now added to the [Prometheus Miscellaneous Exporters list](https://prometheus.io/docs/instrumenting/exporters/#miscellaneous)

# 1.0.1

-   Fixes a bug with only the first request giving a 200 on the metrics endpoint
-   Pre-build docker image available at `captn3m0/prometheus-act-exporter`
-   Disables Chrome sandbox only if running inside a container

# 1.0.0

-   Initial version

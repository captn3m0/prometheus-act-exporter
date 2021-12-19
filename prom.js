const pClient = require("prom-client");
const KEYS = ["live", "flexibytes", "aggregate"];

// Initial Setup
let gauges = {};
pClient.collectDefaultMetrics({ timeout: 60000 });

KEYS.map((key) => {
  gauges[`${key}_used`] = new pClient.Gauge({
    name: `act_fup_${key}_usage_bytes`,
    help: `ACT ${key} usage in bytes (precision GB)`,
  });

  gauges[`${key}_total`] = new pClient.Gauge({
    name: `act_fup_${key}_total_bytes`,
    help: `ACT ${key} usage in bytes (precision GB)`,
  });
});

module.exports = {
  format: function (metrics) {
    KEYS.map((key) => {
      gauges[`${key}_used`].set(metrics[key].usedBytes);
      gauges[`${key}_total`].set(metrics[key].totalBytes);
    });

    return pClient.register.metrics();
  },
  contentType: pClient.register.contentType,
};

const http = require('http');
const port = 3000;
const pClient = require('prom-client');
const metrics = require('./index');

const collectDefaultMetrics = pClient.collectDefaultMetrics;

const requestHandler = async (req, res) => {
    let date = new Date(Date.now()).toLocaleString();
    console.log(`${date}: ${req.url}`);
    switch (req.url) {
        case '/metrics':
            let m = await metrics.getUsage();
            let usedGauge = new pClient.Gauge({
                name: 'act_fup_usage_gigabytes_total',
                help: 'ACT current usage in GB',
            });
            usedGauge.set(m.used);
            let totalGauge = new pClient.Gauge({
                name: 'act_fup_max_gigabytes_total',
                help: 'ACT FUP limit in GB',
            });
            totalGauge.set(m.total);
            let register = pClient.register;

            res.setHeader('Content-Type', register.contentType);
            res.end(register.metrics());
            break;
        default:
            break;
    }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

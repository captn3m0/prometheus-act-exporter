const http = require('http');
const port = 3000;
const pClient = require('prom-client');
const metrics = require('./index');

pClient.collectDefaultMetrics({ timeout: 60000 });

let usedGauge = new pClient.Gauge({
    name: 'act_fup_usage_gigabytes_total',
    help: 'ACT current usage in GB',
});

let totalGauge = new pClient.Gauge({
    name: 'act_fup_max_gigabytes_total',
    help: 'ACT FUP limit in GB',
});

const requestHandler = async (req, res) => {
    let date = new Date(Date.now()).toLocaleString();
    console.log(`${date}: ${req.url}`);
    switch (req.url) {
        case '/metrics':
            let m = await metrics.getUsage();
            // TODO: Switch to the correct err, res pattern with promise
            if (m !== null) {
                usedGauge.set(m.used);
                totalGauge.set(m.total);

                res.setHeader('Content-Type', pClient.register.contentType);
                res.end(pClient.register.metrics());
            } else {
                res.sendStatus(500);
                res.end('Scrape failed');
            }

            break;
        default:
            res.writeHead(302, {
                Location:
                    'https://git.captnemo.in/nemo/prometheus-node-exporter',
            });
            res.end();
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

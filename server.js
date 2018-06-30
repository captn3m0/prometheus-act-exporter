const http = require('http');
const port = 3000;
const metrics = require('./index');
const promFormatter = require('./prom');

const requestHandler = async (req, res) => {
    let date = new Date(Date.now()).toLocaleString();
    console.log(`${date}: ${req.url}`);
    switch (req.url) {
        case '/metrics':
            res.setHeader('Content-Type', promFormatter.contentType);
            res.end(promFormatter.format(await metrics.getUsage()));
            break;
        default:
            res.writeHead(302, {
                Location:
                    'https://git.captnemo.in/nemo/prometheus-act-exporter',
            });
            res.end();
            break;
    }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err) {
        return console.log('could not initialize web server', err);
    }

    console.log(`server is listening on ${port}`);
});

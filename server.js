const http = require('http');
const port = 3000;
const metrics = require('./index');
const promFormatter = require('./prom');

CACHE = {}

const requestHandler = async (req, res) => {
    let date = new Date(Date.now()).toLocaleString();
    console.log(`${date}: ${req.url}`);
    switch (req.url) {
        case '/metrics':
            res.setHeader('Content-Type', promFormatter.contentType);
            metrics.getUsage().then(data=>{
              console.log(data)
              console.log("Setting cache")
              CACHE = data
              res.end(promFormatter.format(data));
            }, err =>{
              console.log(err)
              console.log("Got error, using cache")
              console.log(CACHE)
              res.end(promFormatter.format(CACHE))
            })
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

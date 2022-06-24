const http = require("http");
const port = 3000;
const metrics = require("./index");
const promFormatter = require("./prom");

CACHE = null;

const requestHandler = async (req, res) => {
  switch (req.url) {
    case "/metrics":
      res.setHeader("Content-Type", promFormatter.contentType);
      promFormatter.format(CACHE).then((data) => {
        res.end(data);
      });
      break;
    default:
      res.writeHead(302, {
        Location: "https://github.com/captn3m0/prometheus-act-exporter",
      });
      res.end();
      break;
  }
};

const server = http.createServer(requestHandler);

metrics.onReady((browser) => {
  let t;
  (function refreshCache() {
    metrics.getUsage().then((data) => {
      let date = new Date(Date.now()).toLocaleString();
      console.log(`${date}: Updated Cache`);
      // Start server now if this is the first run
      if (!CACHE) {
        server.listen(port, (err) => {
          if (err) {
            return console.log("could not initialize web server", err);
          }
          console.log(`server is listening on ${port}`);
        });
      }
      CACHE = data;
    }).finally(()=>{
      t = setTimeout(refreshCache, 15 * 60 * 1000);
    });
  })();

  process.on("exit", function () {
    browser.close();
    clearTimeout(t)
  });
});

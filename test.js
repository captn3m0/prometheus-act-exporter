const act = require("./index");
const assert = require('assert')
act.onReady(async (browser)=>{
  metrics = await act.getUsage();
  console.log(metrics);
  for (i of ['live', 'aggregate', 'flexibytes']) {
    console.log(i)
    assert.ok(typeof metrics[i]['usedBytes'] === 'number')
    assert.ok(typeof metrics[i]['totalBytes'] === 'number')
  }
  browser.close();
});

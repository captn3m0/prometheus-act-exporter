const metrics = require('./index');

setTimeout(async () => {
	console.log(await metrics.getUsage());
}, 3000);


const path = require('path');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
(function changeWorkingDirectory() {
	console.log('Starting directory: ' + process.cwd());
	try {
		process.chdir(path.join(appDir, '../'));
		console.log('New directory: ' + process.cwd());
	}
	catch (err) {
		console.log('chdir: ' + err)
	}
})()
const config = require('config');
const express = require('express');
const historyAPIfallback = require("./middleware/historyAPIfallback");
const logger = require("../lib/logger");
const logging = require("./middleware/logging");

const app = express();
const port = config.get("port") || 80;

app.use(logging.logVisit);
app.use(express.static(path.join(__dirname, '../docs')));
app.use(historyAPIfallback);
app.use(express.json());

app.use('/', require('./routes/index'));

app.listen(port, function () {
	console.log(`listening on port ${port}`);
	logger.debug(`listening on port ${port}`)
});

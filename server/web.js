const path = require('path');
const config = require('config');
const express = require('express');
const historyAPIfallback = require("./middleware/historyAPIfallback");
const logger = require("../lib/logger");

const app = express();
const port = config.get("port") || 80;


app.use(express.static(path.join(__dirname, '../docs')));
app.use(historyAPIfallback);
app.use(express.json());

app.use('/', require('./routes/index'));

app.listen(port, function () {
	console.log(`listening on port ${port}`);
	logger.info(`listening on port ${port}`);
});

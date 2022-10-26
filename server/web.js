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
const container = require("../lib/logger");
const runtime = container.get('runtime');
const logging = require("./middleware/logging");

const app = express();
const port = config.get("port") || 80;

app.use(logging.logVisit);
app.use(express.static(path.join(__dirname, '../docs')));
app.use(historyAPIfallback);
app.use(express.json());

app.use('/', require('./routes/index'));

// app.use(function(req, res, next) {
// 	res.status(404);
  
// 	if (req.accepts('html')) {
// 	  res.render('404', { url: req.url });
// 	  return;
// 	}
  
// 	if (req.accepts('json')) {
// 	  res.json({ error: 'Not found' });
// 	  return;
// 	}
  
// 	res.type('txt').send('Not found');
//   });

app.listen(port, function () {
	console.log(`listening on port ${port}`);
	runtime.info(`listening on port ${port}`);
});

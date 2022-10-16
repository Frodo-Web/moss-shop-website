const path = require('path');

const historyAPIfallback = (req, res, next) => {
	if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
		res.sendFile(path.join(__dirname, '../../docs/index.html'), err => err && next());
	} else {
		next();
	}
};
module.exports = historyAPIfallback;
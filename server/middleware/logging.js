const logger = require("../../lib/logger");

exports.logVisit = async (req, res, next) => {
    try {
        logger.info(`${req.ip} ${req.method} ${req.protocol} ${req.originalUrl} ${req.get('user-agent')}`)
        next();
    } catch (err) {
        return next(err);
    }
};
const container = require('../../lib/logger');
const connections = container.get('connections');

exports.logVisit = async (req, res, next) => {
    try {
        connections.info(`cf-connecting-ip: ${req.headers['cf-connecting-ip']} x-forwarded-for: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress} ${req.method} ${req.protocol} ${req.originalUrl} ${req.get('user-agent')}`);
        next();
    } catch (err) {
        return next(err);
    }
};
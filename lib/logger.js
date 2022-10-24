const winston = require('winston');
   require('winston-daily-rotate-file');
const config = require('config');
const logFormat = winston.format.combine(
    // winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
        info => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
)
const transport = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: config.get('logConfig.logFile'),
	dirname: config.get('logConfig.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
transport.on('logRemoved', (removedFilename) => {
	logger.info(`${removedFilename} was removed during 31d log rotation`)
});
const logger = winston.createLogger({
    format: logFormat,
	transports: [
		transport
	]
});
module.exports = logger;
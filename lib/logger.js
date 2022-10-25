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
const infoTransport = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: config.get('infoLogConfig.logFile'),
	dirname: config.get('infoLogConfig.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
const errorTransport = new winston.transports.DailyRotateFile({
	level: 'error',
	filename: config.get('errorLogConfig.logFile'),
	dirname: config.get('errorLogConfig.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
const debugTransport = new winston.transports.DailyRotateFile({
	level: 'debug',
	filename: config.get('debugLogConfig.logFile'),
	dirname: config.get('debugLogConfig.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
infoTransport.on('logRemoved', (removedFilename) => {
	logger.info(`${removedFilename} was removed during 31d log rotation`)
});
errorTransport.on('logRemoved', (removedFilename) => {
	logger.info(`${removedFilename} was removed during 31d log rotation`)
});
debugTransport.on('logRemoved', (removedFilename) => {
	logger.info(`${removedFilename} was removed during 31d log rotation`)
});
const logger = winston.createLogger({
    format: logFormat,
	transports: [
		infoTransport,
		errorTransport,
		debugTransport
	]
});
module.exports = logger;
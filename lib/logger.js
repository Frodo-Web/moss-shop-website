const winston = require('winston');
require('winston-daily-rotate-file');
const config = require('config');

const container = new winston.Container();

const connectionsFormat = winston.format.combine(
	// winston.format.colorize(),
	winston.format.timestamp(),
	winston.format.align(),
	winston.format.printf(
		info => `${info.timestamp} ${info.message}`,
	),
)
const runtimeFormat = winston.format.combine(
	// winston.format.colorize(),
	winston.format.timestamp(),
	winston.format.align(),
	winston.format.printf(
		info => `${info.timestamp} ${info.level}: ${info.message}`,
	),
)
const connections = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: config.get('connectionsLog.logFile'),
	dirname: config.get('connectionsLog.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d',
	format: connectionsFormat,
});
const connectionError = new winston.transports.DailyRotateFile({
	level: 'error',
	filename: config.get('connectionErrorLog.logFile'),
	dirname: config.get('connectionErrorLog.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
const runtime = new winston.transports.DailyRotateFile({
	level: 'info',
	filename: config.get('runtimeLog.logFile'),
	dirname: config.get('runtimeLog.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d',
	format: connectionsFormat,
});
const runtimeError = new winston.transports.DailyRotateFile({
	level: 'error',
	filename: config.get('runtimeErrorLog.logFile'),
	dirname: config.get('runtimeErrorLog.logDirectory'),
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	maxSize: '2m',
	maxFiles: '31d'
});
connections.on('logRemoved', (removedFilename) => {
	runtime.info(`${removedFilename} was removed during 31d log rotation`)
});
connectionError.on('logRemoved', (removedFilename) => {
	runtime.info(`${removedFilename} was removed during 31d log rotation`)
});
runtime.on('logRemoved', (removedFilename) => {
	runtime.info(`${removedFilename} was removed during 31d log rotation`)
});
runtimeError.on('logRemoved', (removedFilename) => {
	runtime.info(`${removedFilename} was removed during 31d log rotation`)
});
container.add('connections', {
	format: connectionsFormat,
	transports: [
		connections,
		connectionError
	]
});
container.add('runtime', {
	format: runtimeFormat,
	transports: [
		runtime,
		runtimeError
	]
});
// const logger = winston.createLogger({
// 	transports: [
// 		connections,
// 		connectionError
// 	]
// });
module.exports = container;
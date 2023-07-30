const bunyan = require('bunyan');

const log = bunyan.createLogger({
	name: 'bunyan-log',
	streams: [
		{
			level: 'info',
			stream: process.stdout,
		},
		{
			level: 'error',
			path: `${process.cwd()}/log/error.log`,
		},
	],
});

module.exports = log;

var bunyan = require('bunyan'),
    path = require('path');

var logger = bunyan.createLogger({
    name: 'loopback-validators',
    streams: [
        {
            level: 'info',
            path: path.join(__dirname, '../logs/loopback-validators.log'),
            type: 'rotating-file',
            period: '3d',
            count: 3
        }
    ],
    serializers: bunyan.stdSerializers
});

module.exports = logger;

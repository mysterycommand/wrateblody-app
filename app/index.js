'use strict';

var PORT = Number(process.env.PORT || 9000);

var express = require('express');
var modrewrite = require('connect-modrewrite');
var logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());
app.use(modrewrite(['^[^\\.]*$ /index.html [L]']));

if (process.env.NODE_ENV === 'test') {
    app.use(express.static(__dirname + '/../test/static'));
}

app.use(express.static(__dirname + '/static'));

if (process.env.NODE_ENV === 'test' ||
    process.env.NODE_ENV === 'dev') {
    app.use('/', express.static(__dirname + '/../.tmp'));
    app.use('/bower_components', express.static(__dirname + '/../bower_components'));
}

app.listen(PORT, function() {
    console.log('Express server listening on port %s.', PORT);
});

module.exports = app;

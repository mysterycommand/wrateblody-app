'use strict';

var PORT = Number(process.env.PORT || 9000);

var express = require('express');
var modrewrite = require('connect-modrewrite');
var logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());
app.use(modrewrite(['^[^\\.]*$ /index.html [L]']));
app.use(express.static(__dirname + '/dist'));

app.listen(PORT, function() {
    console.log('Listening on port:', PORT);
});

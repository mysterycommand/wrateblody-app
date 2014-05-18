'use strict';

const PORT = Number(process.env.PORT || 9000);

var express = require('express');
var logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname, '/dist'));

app.listen(PORT);

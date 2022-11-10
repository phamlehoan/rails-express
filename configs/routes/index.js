const express = require('express');
const path = express.Router();

const httpRouter = require('./http');
const apiRouter = require('./api');

path.use('/', httpRouter);
path.use('/api', apiRouter);

module.exports = path;

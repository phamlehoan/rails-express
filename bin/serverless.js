require('dotenv').config();
const app = require('../configs/application');

const serverless = require('serverless-http');
module.exports.handler = serverless(app);

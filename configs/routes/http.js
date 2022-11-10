const express = require('express');
const path = express.Router();

const constrollers = require(`../../app/controllers/http/home.controller`);

path.route('/').get(constrollers.index);

module.exports = path;

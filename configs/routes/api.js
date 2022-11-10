const express = require('express');
const path = express.Router();

const constrollers = require('../../app/controllers/api/users.controller');

path.route('/users').get(constrollers.index);

module.exports = path;

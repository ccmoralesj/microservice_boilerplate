const mongoose = require('mongoose');
const Promise = require('bluebird');
const logger = require('../logger');
const config = require('../config/database');

mongoose.Promise = Promise;

const db = mongoose.connection;

db.on('error', err => logger('connection error: ', err));

db.once('open', () => logger('connection opened with DB'));

const connection = mongoose.createConnection(config.mongodb.uri, {});

module.exports = connection;

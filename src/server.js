const remit = require('remit');
const Commands = require('./endpoints');
const logger = require('winston');
const remitConfig = require('./config/remit');

const start = async () => {
  // create listener
  const listener = remit(remitConfig);
  Commands.start(listener);
  logger.debug('endpoints added and listening');
  return listener;
};
module.exports = { start };

const prefix = require('./environment');

module.exports = {
  mongodb: {
    uri: process.env[`${prefix}MONGODB_URI`] || '',
  },
};

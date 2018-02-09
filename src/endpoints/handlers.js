const mailInterface = require('../interfaces/sendMail');

const handlers = [
  {
    pattern: 'sendMail',
    handler: msg => mailInterface.sendMail(msg.data),
  },
];

module.exports = handlers;

const mathInterface = require('../interfaces/math');

const handlers = [
  {
    pattern: 'sum',
    handler: msg => exampleInterface.sum(msg.data),
  },
];

module.exports = handlers;

const { MathInterface } = require('../interfaces');

const handlers = [
  {
    pattern: 'sum',
    handler: (msg) => {
      const { a, b } = msg.data;
      return MathInterface.sum(a, b);
    },
  },
];

module.exports = handlers;

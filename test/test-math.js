const chai = require('chai');
const { mathInterface } = require('../src/interfaces');
const expect = chai.expect;

describe('microservice boilerplate', () => {
  it('Should sum to numbers', () => {
    const result = mathInterface.sum({ a: 1, b: 2 });
    expect(result).equals(3);
  });
});

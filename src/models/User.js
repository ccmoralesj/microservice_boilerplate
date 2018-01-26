const { Schema } = require('mongoose');
const connection = require('./connection');

const User = new Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'You must have an email'],
    unique: true,
    index: true,
  },
  picture: {
    url: {
      type: String,
    },
  },
  // Validate the fields to validate an acoount
  validateAccount: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('User', User);

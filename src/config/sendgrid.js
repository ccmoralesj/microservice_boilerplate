const prefix = require('./environment');

module.exports = {
  api_key: process.env[`${prefix}SENDGRID_API_KEY`],
  fromEmail: process.env[`${prefix}SENDGRID_FROM_EMAIL`],
  nameFromEmail: process.env[`${prefix}SENDGRID_NAME_FROM_EMAIL`],
  transactionalIds: {
    goodBye: process.env[`${prefix}SENDGRID_GOOD_BYE_MAIL`],
    deliveryDelay: process.env[`${prefix}SENDGRID_DELIVERY_DELAY_MAIL`],
    contract: process.env[`${prefix}SENDGRID_CONTRACT_MAIL`],
    match: process.env[`${prefix}SENDGRID_MATCH_MAIL`],
    welcome: process.env[`${prefix}SENDGRID_WELCOME_MAIL`],
  },
};

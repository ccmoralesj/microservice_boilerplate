const prefix = require('./environment');

module.exports = {
  api_key: process.env[`${prefix}SENDGRID_API_KEY`],
  fromEmail: process.env[`${prefix}SENDGRID_FROM_EMAIL`],
  nameFromEmail: process.env[`${prefix}SENDGRID_NAME_FROM_EMAIL`],
  mails: {
    welcome: {
      transactionalId: process.env[`${prefix}SENDGRID_WELCOME_MAIL`],
      subject: 'Welcome to Hummi!',
      substitutions: {
        Lorem: 'Cristian',
        ipsum: 'Camilo',
      },
    },
    match: {
      transactionalId: process.env[`${prefix}SENDGRID_MATCH_MAIL`],
      subject: 'You have a new Match!',
      substitutions: {},
    },
    contract: {
      transactionalId: process.env[`${prefix}SENDGRID_CONTRACT_MAIL`],
      subject: 'Contract Detail',
      substitutions: {},
    },
    deliveryDelay: {
      transactionalId: process.env[`${prefix}SENDGRID_DELIVERY_DELAY_MAIL`],
      subject: 'Did you forget a package?',
      substitutions: {},
    },
    goodBye: {
      transactionalId: process.env[`${prefix}SENDGRID_GOOD_BYE_MAIL`],
      subject: 'We\'re sorry you\'re leaving',
      substitutions: {},
    },
  },
};

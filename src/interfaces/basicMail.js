const sgMail = require('@sendgrid/mail');
const sendgridConf = require('../config/sendgrid');

sgMail.setApiKey(sendgridConf.api_key);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

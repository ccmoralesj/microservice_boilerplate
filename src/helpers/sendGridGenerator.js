const logger = require('winston');
const sendgridConf = require('../config/sendgrid');
const sendGridRequestWrapper = require('./sendGridRequest');

const requestGenerator = async ({ toEmail: users, subject, templateId, substitutions, mailBody }) => {
  logger.info('SendGrid Request Generator Starting');
  const emailTos = [];
  if (Object.prototype.toString.call(users) === '[object Array]') {
    users.forEach(user => emailTos.push({ email: user.email, name: user.name }));
  } else {
    emailTos.push({ email: users.email, name: users.name });
  }
  const mailDetail = {
    personalizations: [{
      to: emailTos,
      substitutions,
    }],
    from: {
      email: sendgridConf.fromEmail,
      name: sendgridConf.nameFromEmail,
    },
    subject,
    content: [{ type: 'text/html', value: `<html><p>${(mailBody !== undefined) ? mailBody : ''}</p></html>` }],
    template_id: templateId,
  };
  logger.info('Calling the Wrapper');
  await sendGridRequestWrapper.requestWrapper(mailDetail);
};

module.exports = requestGenerator;

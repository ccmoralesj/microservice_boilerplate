const sendGridGenerator = require('../helpers/sendGridGenerator');
const sendgridConf = require('../config/sendgrid');
const BusinessError = require('../BusinessError');
const errors = require('../errors');

const emailNames = ['goodBye', 'deliveryDelay', 'contract', 'match', 'welcome'];

function isValidEmailName(emailName) {
  const index = emailNames.indexOf(emailName);
  return index !== -1;
}

const sendMail = async ({ emailName, usersToSend }) => {
  if (!isValidEmailName(emailName)) {
    throw new BusinessError(errors.EMAIL_NAME_REQUESTED_IS_NOT_VALID);
  }
  const { transactionalId: templateId, subject, substitutions } = sendgridConf.mails[emailName];
  await sendGridGenerator({ toEmail: usersToSend, subject, templateId, substitutions });
};

module.exports = {
  sendMail,
};

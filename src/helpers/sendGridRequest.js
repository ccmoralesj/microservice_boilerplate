const logger = require('winston');
const client = require('@sendgrid/client');
const errors = require('../errors');
const BusinessError = require('../BusinessError');
const sendgridConf = require('../config/sendgrid');

client.setApiKey(sendgridConf.api_key);

const requestWrapper = async (mailDetail) => {
  logger.info('SendGrid Request Wrapper Starting');
  const request = {
    method: 'POST',
    url: 'v3/mail/send',
    body: mailDetail,
  };
  logger.info('Sending request!');
  logger.info(JSON.stringify(request));

  client.request(request)
    .then(([response, body]) => {
      logger.info(`Status Code: ${response.statusCode}`);
      logger.info(`Response body: ${response.body}`);
      logger.info(`Body itself ${body}`);

      if (response.statusCode !== 200 && response.statusCode !== 202) {
        throw new BusinessError(errors.EMAIL_WAS_NOT_SEND);
      }
      return response.statusCode;
    })
    .catch(e => {
      logger.error(e);
    });
};

module.exports = {
  requestWrapper,
};

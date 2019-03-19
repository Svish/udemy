const sendgrid = require('sendgrid');

module.exports = {
  sendgrid: sendgrid(process.env.SEND_GRID_API_KEY),
  helper: sendgrid.mail,
};

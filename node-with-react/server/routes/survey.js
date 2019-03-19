const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const authenticated = require('../middlewares/authenticated');
const hasCredits = require('../middlewares/hasCredits');

const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/survey');

module.exports = app => {
  app.post('/api/surveys', authenticated, hasCredits(1), async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      _user: req.user.id,
      dateSent: Date.now(),
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map(email => email.trim())
        .filter(email => !!email)
        .map(email => ({ email })),
    });

    const mailer = new Mailer(survey, template(survey));

    try {
      const response = await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      console.log('Survey sent:', response.statusCode);
      return res.send(user);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ error: e.message });
    }
  });

  app.get('/api/surveys', authenticated, async (req, res) => {
    // TODO
  });
};

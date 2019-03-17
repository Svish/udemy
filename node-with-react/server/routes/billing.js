const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/payments', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'USD',
      description: '$5 for 5 credits',
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

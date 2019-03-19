const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const authenticated = require('../middlewares/authenticated');

module.exports = app => {
  app.post('/api/payments', authenticated, async (req, res) => {
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

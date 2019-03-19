module.exports = amount => (req, res, next) => {
  if (req.user.credits < amount) {
    return res.status(402).send({ error: 'Not enough credits' });
  }

  next();
};

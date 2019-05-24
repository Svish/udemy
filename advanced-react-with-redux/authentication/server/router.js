module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send(['waterbottle', 'phone', 'paper']);
  });
};

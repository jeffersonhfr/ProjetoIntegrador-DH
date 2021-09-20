const controller = {
  index: (req, res, next) => {
    res.render('login', {
      title: '| Login',
    });
  },
};

module.exports = controller;
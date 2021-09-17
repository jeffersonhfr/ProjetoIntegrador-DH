const controller = {
  index: (req, res, next) => {
    res.render('login', {
      title: '',
    });
  },
};

module.exports = controller;
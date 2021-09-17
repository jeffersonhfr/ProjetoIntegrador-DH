const controller = {
  index: (req, res, next) => {
    res.render('sobre', {
      title: '| Sobre',
    });
  },
};

module.exports = controller;
const controller = {
  index: (req, res, next) => {
    res.render('index', {
      title: '| Aproveite nossas ofertas',
    });
  },
};

module.exports = controller;
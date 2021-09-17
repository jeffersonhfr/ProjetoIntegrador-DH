const controller = {
  index: (req, res, next) => {
    res.render('pacotes', {
      title: '| Pacotes',
    });
  },
};

module.exports = controller;
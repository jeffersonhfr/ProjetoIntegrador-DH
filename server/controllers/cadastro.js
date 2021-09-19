const controller = {
  index: (req, res, next) => {
    res.render('cadastro', {
      title: '',
    });
  },
};

module.exports = controller;
const controller = {
  index: (req, res, next) => {
    res.render('cadastro', {
      title: '| Cadastre-se',
    });
  },
};

module.exports = controller;
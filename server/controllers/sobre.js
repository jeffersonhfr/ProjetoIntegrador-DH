const controller = {
  index: (req, res, next) => {
    res.render('sobre', {
      title: '| Sobre',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
};

module.exports = controller;
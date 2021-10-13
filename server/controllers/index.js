const controller = {
  index: (req, res, next) => {
    res.render('index', {
      title: '| Aproveite nossas ofertas',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
};

module.exports = controller;
const controller = {
  index: (req, res, next) => {
    res.render('ajuda', {
      title: '| Ajuda',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
};

module.exports = controller;
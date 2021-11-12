const controller = {
  index: (req, res, next) => {
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    if (usuarioAdmin || usuarioLogado) {
      res.redirect('../../');
    } else {
      res.render('login', {
        title: '| Login',
        erro: '',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    }
  },
  auth: (req, res, next) => {
    res.redirect('../../');
  },
};

module.exports = controller;

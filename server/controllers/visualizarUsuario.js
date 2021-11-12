const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');

const controller = {
  index: (req, res, next) => {
    const { id } = req.params;
    const usuario = usuariosPlaceholder[id - 1];
    res.render('visualizarUsuario', {
      title: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuario: usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

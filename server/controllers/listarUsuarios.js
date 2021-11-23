const { getAllUser } = require("../services/usuarios");

const controller = {
  index: async (req, res, next) => {
    const user = await getAllUser();
    res.render("listarUsuarios", {
      title: "Usuário",
      subtitulo: `Usuário`,
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  show: (req, res, next) => {
    const { id } = req.params;
    const usuario = usuariosPlaceholder[id - 1];
    res.render("usuario", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      usuario: usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  edit: (req, res, next) => {
    const { id } = req.params;
    const usuario = usuariosPlaceholder[id - 1];
    res.render("usuario-edit", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      usuario: usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

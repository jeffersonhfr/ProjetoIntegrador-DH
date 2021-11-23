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
  show: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log(user);
    res.render("usuario", {
      title: "| Usuario",
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.render("usuario-edit", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

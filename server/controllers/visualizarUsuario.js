const { getUserById } = require("../services/usuarios");

const controller = {
  index: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log(user);
    res.render("visualizarUsuario", {
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

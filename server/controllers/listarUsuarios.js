const usuariosPlaceholder = require("../data/usuariosPlaceholder.json");

const controller = {
  index: (req, res, next) => {
    res.render("listarUsuarios", {
      title: "| Listar Usuários",
      erro: "",
      usuario: usuariosPlaceholder,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
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
    });
  },
};

module.exports = controller;

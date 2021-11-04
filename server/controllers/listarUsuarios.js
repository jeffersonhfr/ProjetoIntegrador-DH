const usuario = require("../data/usuariosPlaceholder.json");

const controller = {
  index: (req, res, next) => {
    res.render("listarUsuarios", {
      title: "| Listar Usuários",
      erro: "",
      usuario: usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  edit: (req, res, next) => {
    res.render("usuario-edit", {
      title: "| Editar Usuário",
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  delete: (req, res, next) => {
    res.redirect("../../listarUsuarios");
  },
};

module.exports = controller;

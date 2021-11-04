const usuario = require("../data/usuariosPlaceholder.json");

const controller = {
  index: (req, res, next) => {
    res.render("listarUsuarios", {
      title: "| Listar Usuários",
      erro: "",
      usuario: usuario,
    });
  },
  // show: (req, res, next) => {
  //   const { id } = req.params;
  //   const usuario = usuariosPlaceholder[id - 1];
  //   res.render("user", {
  //     titulo: "Usuário",
  //     subtitulo: `Usuário #${id}`,
  //     usuario,
  //     usuarioLogado: req.cookies.usuario,
  //     usuarioAdmin: req.cookies.admin,
  //   });
  // },
  // list: (req, res, next) => {
  //   let admin = req.cookies.admin;
  //   if (!admin || admin === "false") {
  //     res.render("users", {
  //       titulo: "Ops!",
  //       subtitulo: "Você não pode gerenciar usuários, apenas visualizá-los.",
  //       usuarios: usuariosPlaceholder,
  //       usuarioLogado: req.cookies.usuario,
  //       usuarioAdmin: admin,
  //     });
  //   } else {
  //     res.render("usersList", {
  //       titulo: "Usuários",
  //       subtitulo: "Listagem de Usuários",
  //       usuarios: usuariosPlaceholder,
  //       usuarioLogado: req.cookies.usuario,
  //       usuarioAdmin: admin,
  //     });
  //   }
  // },
};

module.exports = controller;

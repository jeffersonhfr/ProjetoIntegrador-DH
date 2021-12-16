const { getAllUser, updateUser } = require("../services/usuarios");
const { getUserById } = require("../services/usuarios");
const bcrypt = require("bcrypt");

const controller = {
  index: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    if (usuarioAdmin || usuarioLogado) {
      res.render("usuario", {
        title: "| " + usuarioLogado.nome,
        user,
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect("../login");
    }
  },

  // show: async (req, res, next) => {
  //   const { id } = req.params;
  //   const user = await getUserById(id);
  //   console.log(user);
  //   res.render("usuario-edit", {
  //     title: "| Usuario",
  //     user,
  //     usuarioLogado: req.cookies.usuario,
  //     usuarioAdmin: req.cookies.admin,
  //     usuarioAvatar: req.cookies.avatar,
  //   });
  // },

  edit: async (req, res, next) => {
    const user = req.body;
    user.senha = bcrypt.hashSync(req.body.senha, 10);
    const { id } = req.cookies.usuario;
    const update = await updateUser(id, req.body, user);
    // console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    res.render("usuario-edit", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      usuarioLogado: usuarioLogado,
      usuarioAdmin: usuarioAdmin,
      usuarioAvatar: req.cookies.avatar,
    });
    if (update) {
      res.redirect("../perfil");
    } else {
      res.status(500).send("Ops... deu ruim...");
    }

    // FALTA A SENHA HASH?

    // res.redirect("../perfil");
  },

  form_edit: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;

    if (usuarioAdmin || usuarioLogado) {
      res.render("usuario-edit", {
        title: "| " + usuarioLogado.nome,
        user,
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect("../login");
    }
  },
};

module.exports = controller;

const { getAllUser } = require("../services/usuarios");
const { getUserById } = require("../services/usuarios");
const { destroyUser, updateUser } = require("../services/usuarios");

const bcrypt = require("bcrypt");

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
    res.render("usuario-edit", {
      title: "| Usuario",
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },

  form_edit: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;

    if (usuarioAdmin || usuarioLogado) {
      res.render("usuario-edit", {
        title: "| " + usuarioLogado.nome,
        user,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect("../login");
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    user.avatar = req.cookies.avatar;
    user.senha = bcrypt.hashSync(req.body.senha, 10);
    const update = await updateUser(id, req.body, user);
    if (update) {
      res.redirect("../../listarUsuarios");
    } else {
      res.status(500).send("Ops... deu ruim...");
    }
  },

  delete: (req, res, next) => {
    res.redirect("../../listarUsuarios");
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const destroy = await destroyUser(id);
    if (destroy) {
      res.redirect("../../listarUsuarios");
    } else {
      res.status(500).send("Ops... deu ruim...");
    }
  },
};

module.exports = controller;

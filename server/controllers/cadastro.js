const { createUser, getUserById } = require("../services/usuarios");
const bcrypt = require("bcrypt");

const controller = {
  index: (req, res, next) => {
    res.render("cadastro", {
      title: "| Cadastre-se",
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  cadastro: (req, res, next) => {
    res.render("cadastro", {
      title: "| Cadastre-se",
      titulo: "Teste",
      subtitulo: "Teste",
      usuarioAvatar: req.cookies.avatar,
    });
  },
  add: async (req, res, next) => {
    const user = req.body;
    user.senha = bcrypt.hashSync(req.body.senha, 10);
    user.criadoEm = new Date();
    user.modificadoEm = new Date();
    user.admin = false;
    user.avatar = "/assets/img/Aventura.jpg";
    const create = await createUser(user);
    if (create) {
      res.redirect("../login");
    } else {
      res.status(500).send("Ops... deu ruim...");
    }
  },
};

module.exports = controller;

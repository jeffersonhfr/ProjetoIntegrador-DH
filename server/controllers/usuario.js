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

  edit: async (req, res, next) => {
    const { id } = req.cookies.usuario;

    if (req.file) {
      var usuarioAvatar = `${req.file.filename}`;
    } else {
      usuarioAvatar = req.cookies.avatar;
    }

    const user = {
      userNome: req.body.nome,
      userEmail: req.body.email,
      // userSenha: bcrypt.hashSync(req.body.senha, 10),
      userNascimento: req.body.nascimento,
      userTelefone: req.body.telefone,
      userCpf: req.body.cpf,
      userCep: req.body.cep,
      userLogradouro: req.body.endereco,
      userComplemento: req.body.complemento,
      userLocalidade: req.body.cidade,
      userUf: req.body.uf,
      userAvatar: usuarioAvatar,
      userModificadoEm: new Date(),
    };

    console.log(usuarioAvatar);
    console.log(req.file.filename);

    const update = await updateUser(id, user);

    if (update) {
      res.redirect("../perfil");
    } else {
      res.status(500).send("Ops... deu ruim...");
    }
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

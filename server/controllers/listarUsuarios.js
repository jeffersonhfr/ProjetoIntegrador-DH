const { getAllUser } = require("../services/usuarios");
const { getUserById } = require("../services/usuarios");
const { destroyUser } = require("../services/usuarios");
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
  edit: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log(user);

    res.render("usuario-edit", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
    user.nome = req.body.nome;
    user.email = req.body.email;
    user.nascimento = req.body.nascimento;
    user.telefone = req.body.telefone;
    user.cpf = req.body.cpf;
    user.cep = req.body.cep;
    user.logradouro = req.body.endereco;
    user.complemento = req.body.complemento;
    user.localidade = req.body.cidade;
    user.uf = req.body.uf;
    (user.avatar = req.body.avatar), (user.modificadoEm = new Date());
    user.push(user);

    // FALTA A SENHA HASH
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

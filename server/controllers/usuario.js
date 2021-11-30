const { getAllUser } = require("../services/usuarios");
const { getUserById } = require("../services/usuarios");

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
    const { id } = req.cookies.usuario;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    console.log(user);
    res.render("usuario-edit", {
      title: "Usuário",
      subtitulo: `Usuário #${id}`,
      user,
      usuarioLogado: usuarioLogado,
      usuarioAdmin: usuarioAdmin,
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

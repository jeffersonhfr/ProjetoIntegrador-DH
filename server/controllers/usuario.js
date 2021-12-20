const { getAllUser, updateUser } = require('../services/usuarios');
const { getUserById } = require('../services/usuarios');
const bcrypt = require('bcrypt');

const controller = {
  index: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    if (usuarioAdmin || usuarioLogado) {
      res.render('usuario', {
        title: '| ' + usuarioLogado.nome,
        user,
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect('../login');
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.cookies.usuario;

    if (req.file) {
      var usuarioAvatar = `/assets/img/avatar/${req.file.filename}`;
    } else {
      usuarioAvatar = req.cookies.avatar;
    }

    if (req.body.senha != '') {
      var senhaCrypto = bcrypt.hashSync(req.body.senha, 10);
      var user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCrypto,
        nascimento: req.body.nascimento,
        cpf: req.body.cpf,
        avatar: usuarioAvatar,
        telefone: req.body.telefone,
        cep: req.body.cep,
        logradouro: req.body.endereco,
        complemento: req.body.complemento,
        localidade: req.body.cidade,
        uf: req.body.uf,
        userModificadoEm: new Date(),
      };
    } else {
      var user = {
        nome: req.body.nome,
        email: req.body.email,
        nascimento: req.body.nascimento,
        cpf: req.body.cpf,
        avatar: usuarioAvatar,
        telefone: req.body.telefone,
        cep: req.body.cep,
        logradouro: req.body.endereco,
        complemento: req.body.complemento,
        localidade: req.body.cidade,
        uf: req.body.uf,
        userModificadoEm: new Date(),
      };
    }

    const update = await updateUser(id, user);

    if (update) {
      res.redirect('../perfil');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },

  form_edit: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    const user = await getUserById(id);
    console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;

    if (usuarioAdmin || usuarioLogado) {
      res.render('usuario-edit', {
        title: '| ' + usuarioLogado.nome,
        user,
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect('../login');
    }
  },
};

module.exports = controller;

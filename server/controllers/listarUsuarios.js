const { getAllUser, updateUser, destroyUser } = require('../services/usuarios');
const { getUserById } = require('../services/usuarios');
const bcrypt = require('bcrypt');

const controller = {
  index: async (req, res, next) => {
    const user = await getAllUser();
    res.render('listarUsuarios', {
      title: 'Usuário',
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
    res.render('usuario-edit', {
      title: '| Usuario',
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },

  form_edit: async (req, res, next) => {
    const { id } = req.params;
    const user = await getUserById(id);

    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;

    if (usuarioAdmin || usuarioLogado) {
      res.render('usuario-edit', {
        title: '| Editar usuário',
        user,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.redirect('../login');
    }
  },

  edit: async (req, res, next) => {
    const id = req.body.idUsuario;

    const usuario = await getUserById(id);
    if (req.file) {
      var usuarioAvatar = `/assets/img/avatar/${req.file.filename}`;
    } else {
      usuarioAvatar = usuario.avatar;
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
      res.redirect('../../listarUsuarios');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },

  delete: (req, res, next) => {
    res.redirect('../../listarUsuarios');
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const destroy = await destroyUser(id);
    if (destroy) {
      res.redirect('../../listarUsuarios');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
};

module.exports = controller;

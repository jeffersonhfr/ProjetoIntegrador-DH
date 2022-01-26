const { getAllUser, updateUser, destroyUser } = require('../services/usuarios');
const { getUserById } = require('../services/usuarios');
const bcrypt = require('bcrypt');

const controller = {
  index: async (req, res, next) => {
    try {
      const user = await getAllUser();

      return res.status(200).json({
        title: 'Usuário',
        subtitulo: `Usuário`,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor' });
    }
  },
  show: async (req, res, next) => {
    try {
    
      const { id } = req.params;

      const user = await getUserById(id);
      if(!user)
        return res.status(404).send({erro:"Usuário não encontrado!"});

      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor' });
    }
  },
  form_edit: async (req, res, next) => {
    try {
      const id = 5;
      let usuarioAdmin = user[0].admin;
      let usuarioLogado = true;
      const usuarioAvatar = user[0].avatar;

      // const { id } = req.params;
      // let usuarioLogado = req.cookies.usuario;
      // let usuarioAdmin = req.cookies.admin;
      // const usuarioAvatar = user[0].avatar;

      const user = await getUserById(id);
      if (usuarioAdmin || usuarioLogado) {
        return res.status(200).send({
          title: '| Editar usuário',
          user,
          usuarioLogado,
          usuarioAdmin,
          usuarioAvatar,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Erro do servidor', error });
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

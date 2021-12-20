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
      // var usuarioAvatar = `${req.file.filename}`;
      var usuarioAvatar = 'UPLOAD';
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

      console.log('\n\n Nome:' + user.nome);
      console.log('\n\n Email:' + user.email);
      console.log('\n\n Senha Normal:' + req.body.senha);
      console.log('\n\n Senha Crypto:' + user.senha);
      console.log('\n\n Nascimento:' + user.nascimento);
      console.log('\n\n CPF:' + user.cpf);
      console.log('\n\n Avatar:' + user.avatar);
      console.log('\n\n Telefone:' + user.telefone);
      console.log('\n\n Cep:' + user.cep);
      console.log('\n\n Logradouro:' + user.logradouro);
      console.log('\n\n Complemento:' + user.complemento);
      console.log('\n\n Localidade:' + user.localidade);
      console.log('\n\n UF:' + user.uf);
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

      console.log('\n\n Nome:' + user.nome);
      console.log('\n\n Email:' + user.email);
      console.log('\n\n Nascimento:' + user.nascimento);
      console.log('\n\n CPF:' + user.cpf);
      console.log('\n\n Avatar:' + user.avatar);
      console.log('\n\n Telefone:' + user.telefone);
      console.log('\n\n Cep:' + user.cep);
      console.log('\n\n Logradouro:' + user.logradouro);
      console.log('\n\n Complemento:' + user.complemento);
      console.log('\n\n Localidade:' + user.localidade);
      console.log('\n\n UF:' + user.uf);
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

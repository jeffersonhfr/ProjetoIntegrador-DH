const { createUser } = require('../services/usuarios');
const bcrypt = require('bcrypt');

const controller = {
  index: (req, res, next) => {
    try {
      return res.status(200).json({
        title: '| Cadastre-se',
        // usuarioLogado: req.cookies.usuario,
        // usuarioAdmin: req.cookies.admin,
        // usuarioAvatar: req.cookies.avatar,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  add: async (req, res, next) => {
    try {
      //Inserção Manual
      // let user = [];
      // user.nome = 'Jeff';
      // user.email = 'jeff@gmail.com';
      // user.senhaNormal = '123456';
      // user.criadoEm = new Date();
      // user.modificadoEm = new Date();
      // user.admin = false;
      // user.avatar = '/assets/img/Aventura.jpg';
      // user.senha = bcrypt.hashSync(user.senhaNormal, 10);

      const user = req.body;
      user.senha = bcrypt.hashSync(req.body.senha, 10);
      user.criadoEm = new Date();
      user.modificadoEm = new Date();
      user.admin = false;
      user.avatar = '/assets/img/Aventura.jpg';

      const create = await createUser(user);
      if (create) {
        return res.status(200).json({
          Mensagem: 'Cadastro Realizado com Sucesso',
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
};

module.exports = controller;

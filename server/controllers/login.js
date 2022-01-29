const controller = {
  login: async (req, res, next) => {
    const bcrypt = require('bcrypt');
    const { getUserByEmail } = require('../services/usuarios');
    const jwt = require('jsonwebtoken');
    const { secret } = require('../config/auth.json');
    try {
      res.clearCookie('token');

      const { email, senha } = await req.body;

      const user = await getUserByEmail(email);
      console.log(user);

      if (!user) {
        res.status(400).send('Usuario nao encontrado!');
      }
      if (!bcrypt.compareSync(senha, user.senha)) {
        res.status(400).send('Senha incorreta!');
      }

      const token = jwt.sign({ id: user.id, admin: user.admin }, secret);
      res.cookie('token', token);
      user.senha = undefined;

      return res.status(200).send({ user, token });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        erro: 'Tivemos alguns problemas internos! Tente novament mais tarde, se o problema persistir entr em contato com o suporte',
      });
    }
  },
  logout: (req, res, next) => {
    res.clearCookie('token').status(200).send('sucesso');
  },
};

module.exports = controller;

const { getAllUser, updateUser } = require('../services/usuarios');
const { getUserById } = require('../services/usuarios');

const controller = {
  index: async (req, res, next) => {
    try {
      //Manual
      // const id = 1;
      // let usuarioLogado = true;
      // let usuarioAdmin = user[0].admin;
      // const usuarioAvatar = user[0].avatar;

      const { id } = req.cookies.usuario;
      let usuarioLogado = req.cookies.usuario;
      let usuarioAdmin = user[0].admin;
      const usuarioAvatar = user[0].avatar;

      const user = await getUserById(id);

      if (usuarioAdmin || usuarioLogado) {
        return res.status(200).json({
          title: '| ' + user[0].nome,
          user,
          usuarioLogado,
          usuarioAdmin,
          usuarioAvatar,
        });
      } else {
        return res.status(500).json({ message: 'Usuário não logado' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  edit: async (req, res, next) => {
    try {
      //Manual
      // const id = 5;
      // const user = [];
      // user.nome = 'Jeff';
      // user.email = 'Jeff@gmail.com';
      // const update = await updateUser(id, user);
      // let usuarioLogado = true;
      // let usuarioAdmin = user[0].admin;
      // const usuarioAvatar = user[0].avatar;

      const { id } = req.cookies.usuario;
      const update = await updateUser(id, req.body);
      let usuarioLogado = req.cookies.usuario;
      let usuarioAdmin = user[0].admin;
      const usuarioAvatar = user[0].avatar;

      if (update) {
        return res.status(200).json({
          title: 'Usuário',
          subtitulo: `Usuário #${id}`,
          usuarioLogado,
          usuarioAdmin,
          usuarioAvatar,
        });
      } else {
        return res.status(200).json({ message: 'Erro ao editar usuário' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },

  form_edit: async (req, res, next) => {
    try {
      //Manual
      const id = 5;
      const user = await getUserById(id);
      const usuarioAvatar = user[0].avatar;
      let usuarioAdmin = user[0].admin;
      let usuarioLogado = true;

      // const { id } = req.cookies.usuario;
      // const user = await getUserById(id);
      // const usuarioAvatar = user[0].avatar;
      // let usuarioLogado = req.cookies.usuario;
      // let usuarioAdmin = user[0].admin;

      return res.status(200).json({
        title: '| ' + user[0].nome,
        user,
        usuarioLogado,
        usuarioAdmin,
        usuarioAvatar,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }

    if (usuarioAdmin || usuarioLogado) {
      res.render('usuario-edit', {
        title: '| ' + usuarioLogado.nome,
        user,
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
        usuarioAvatar: req.cookies.avatar,
      });
    }
  },
};

module.exports = controller;

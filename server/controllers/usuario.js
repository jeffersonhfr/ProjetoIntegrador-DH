const { getAllUser, updateUser } = require('../services/usuarios');
const { getUserById } = require('../services/usuarios');

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
    const update = await updateUser(id, req.body);
    // console.log(user);
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    res.render('usuario-edit', {
      title: 'Usuário',
      subtitulo: `Usuário #${id}`,
      usuarioLogado: usuarioLogado,
      usuarioAdmin: usuarioAdmin,
      usuarioAvatar: req.cookies.avatar,
    });
    if (update) {
      res.redirect('../perfil');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }

    // FALTA A SENHA HASH?

    // res.redirect("../perfil");
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

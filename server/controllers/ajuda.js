const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');
const ajudaPlaceholder = require('../data/ajuda.json');

let {tituloAjuda, textoAjuda} = ajudaPlaceholder;

const controller = {
  index: (req, res, next) => {
    res.render('ajuda', {
      title: '| Ajuda',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      tituloAjuda, 
      textoAjuda
    });
  },
  list: (req, res, next) => {
    let admin = req.cookies.admin
    if (!admin || admin == 'false') {
      res.render('login', {
        title: '| Ajuda',
        erro: 'Você não tem autorização para visualizar essa página',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin,
      });
    } else {
      res.render('ajuda-edit', {
        title: '| Ajuda',
        erro: '',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: admin,
        tituloAjuda, 
        textoAjuda
      });
    }
  }
};

module.exports = controller;
const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');
const sobrePlaceholder = require('../data/sobrenos.json');
const fs = require('fs');
const path = require('path');

let { tituloPrincipal, tituloHistoria, textoHistoria } = sobrePlaceholder;

const controller = {
  index: (req, res, next) => {
    res.render('sobre', {
      title: '| Sobre',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
      tituloPrincipal,
      tituloHistoria,
      textoHistoria,
    });
  },
  list: (req, res, next) => {
    let admin = req.cookies.admin;
    if (!admin || admin == 'false') {
      res.render('login', {
        title: '| Ajuda',
        erro: 'Você não tem autorização para visualizar essa página',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAvatar: req.cookies.avatar,
        usuarioAdmin: admin,
      });
    } else {
      res.render('sobre-edit', {
        title: '| Ajuda',
        erro: '',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAvatar: req.cookies.avatar,
        usuarioAdmin: admin,
        tituloPrincipal,
        tituloHistoria,
        textoHistoria,
      });
    }
  },
  update: (req, res, next) => {
    let ajuda = req.body;
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'sobrenos.json'),
      JSON.stringify(ajuda),
    );
    res.redirect('../sobre');
  },
};

module.exports = controller;

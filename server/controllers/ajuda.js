const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');
const ajudaPlaceholder = require('../data/ajuda.json');
const fs = require('fs');
const util = require('util');
const path = require('path');

let {
  tituloPrincipal,
  tituloDuvidas,
  textoDuvidas,
  tituloCancelamentos,
  textoCancelamentos,
  tituloPolítica,
  textoPolítica,
} = ajudaPlaceholder;

const controller = {
  index: (req, res, next) => {
    res.render('ajuda', {
      title: '| Ajuda',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
      tituloPrincipal,
      tituloDuvidas,
      textoDuvidas,
      tituloCancelamentos,
      textoCancelamentos,
      tituloPolítica,
      textoPolítica,
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
      res.render('ajuda-edit', {
        title: '| Ajuda',
        erro: '',
        usuarios: usuariosPlaceholder,
        usuarioLogado: req.cookies.usuario,
        usuarioAvatar: req.cookies.avatar,
        usuarioAdmin: admin,
        tituloPrincipal,
        tituloDuvidas,
        textoDuvidas,
        tituloCancelamentos,
        textoCancelamentos,
        tituloPolítica,
        textoPolítica,
      });
    }
  },
  update: async (req, res, next) => {
    let ajuda = await req.body;

    fs.writeFile(
      path.join(__dirname, '..', 'data', 'ajuda.json'),
      JSON.stringify(ajuda),
      (error) => {
        if (error) throw error;
        console.log('The file2.js has been saved!');
        res.redirect('../ajuda');
      },
    );
  },
};

module.exports = controller;

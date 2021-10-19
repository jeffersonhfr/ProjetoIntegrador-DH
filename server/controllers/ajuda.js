const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');
const ajudaPlaceholder = require('../data/ajuda.json');
const fs = require('fs');
const path = require('path');

let {tituloPrincipal, tituloDuvidas, textoDuvidas, tituloCancelamentos, textoCancelamentos, tituloPolítica, textoPolítica} = ajudaPlaceholder;

const controller = {
  index: (req, res, next) => {
    res.render('ajuda', {
      title: '| Ajuda',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      tituloPrincipal, 
      tituloDuvidas,
      textoDuvidas,
      tituloCancelamentos,
      textoCancelamentos,
      tituloPolítica,
      textoPolítica
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
        tituloPrincipal, 
        tituloDuvidas,
        textoDuvidas,
        tituloCancelamentos,
        textoCancelamentos,
        tituloPolítica,
        textoPolítica
      });
    }
  },
  update: (req, res, next) => {
    let ajuda = req.body;
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'ajuda.json'), JSON.stringify(ajuda))
    
    res.redirect('../ajuda')
  
  }
};

module.exports = controller;
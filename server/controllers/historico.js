const fs = require('fs'),
  path = require('path')
  
const controller = {
  index: (req, res, next) => {
    res.render('historico', {
      title: '| Histórico de Viagens',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  }
};

module.exports = controller;
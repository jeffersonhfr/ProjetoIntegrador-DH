const pacotes = require('../data/pacotes.json');

const controller = {
  index: (req, res, next) => {
    res.render('pacotes', {
      title: '| Pacote',
      pacotes: pacotes,
      valor: (valor) => {
        return valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  show: (req, res, next) => {
    res.render('pacote', {
      title: '| Pacote',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  admin: (req, res, next) => {
    res.render('admin', {
      title: '| admin',
      pacotes: pacotes,
      valor: (valor) => {
        return valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
};

module.exports = controller;

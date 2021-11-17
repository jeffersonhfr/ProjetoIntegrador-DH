const pacotes = require('../data/pacotes.json');
const { getAllPacotes } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const pack = await getAllPacotes();
    console.log(pack);
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
      usuarioAvatar: req.cookies.avatar,
    });
  },
  add: (req, res, next) => {
    res.render('adicionar-pacote', {
      title: '| Adicionar Pacote',
      pacotes: pacotes,
      valor: (valor) => {
        return valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  show: (req, res, next) => {
    res.render('pacote', {
      title: '| Pacote',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  edit: (req, res, next) => {
    res.render('pacote-edit', {
      title: '| Pacote',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  delete: (req, res, next) => {
    res.redirect('../../pacotes');
  },
};

module.exports = controller;

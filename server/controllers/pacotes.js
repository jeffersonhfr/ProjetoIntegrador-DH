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
    });
  },add_form:(req, res, next) => {
    res.render('adicionar-pacote', {
      title: '| Adicionar Pacote',
      pacotes: pacotes,
      imagens: pacotes
      ,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  }
  ,
  show: (req, res, next) => {
    let pacote = pacotes.find(u=>req.params.id == u.id);

    res.render('pacote', {
      title: '|'+ pacote.nome,
      pacote: pacote,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  edit: (req, res, next) => {
    res.render('pacote-edit', {
      title: '| Pacote',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  delete: (req, res, next) => {
    res.redirect('../../pacotes');
  },
};

module.exports = controller;

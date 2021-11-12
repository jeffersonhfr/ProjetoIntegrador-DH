const pacotes = require('../data/pacotes.json');

const controller = {
  index: (req, res, next) => {
    res.render('pesquisa', {
      title: '| Pesquisa',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
      pacotes: pacotes,
      valor: (valor) => {
        return valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
    });
  },
};

module.exports = controller;

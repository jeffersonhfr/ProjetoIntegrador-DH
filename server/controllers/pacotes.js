const { getAllPackages } = require('../services/pacotes');
const { getPackagesById } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const pack = await getAllPackages();
    res.render('pacotes', {
      title: '| Pacote',
      pack,
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
  show: async (req, res, next) => {
    const { id } = req.params;
    const pack = await getPackagesById(id);
    console.log(pack);

    res.render('pacote', {
      title: '| Pacote',
      pack,
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

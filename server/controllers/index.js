const { getAllCategorias } = require('../services/categorias');
const { getAllAddtionals } = require('../services/adicionais');
const { getAllPackages } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const categorias = await getAllCategorias();
    const add = await getAllAddtionals();
    const pack = await getAllPackages();

    res.render('index', {
      title: '| Aproveite nossas ofertas',
      categorias,
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
};

module.exports = controller;

const { getAllCategorias } = require('../services/categorias');
const { getAllAddtionals } = require('../services/adicionais');
const { getAllPacotes } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const categorias = await getAllCategorias();
    const add = await getAllAddtionals();
    const pack = await getAllPacotes();
    console.log(add, pack, categorias);
    res.render('index', {
      title: '| Aproveite nossas ofertas',
      add,
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

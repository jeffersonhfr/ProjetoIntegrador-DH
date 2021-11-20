const { getAllCategorias } = require('../services/categorias');
const { getAllPacotes } = require('../services/pacotes');
const { getAllAddtionals } = require('../services/adicionais');

const controller = {
  index: async (req, res, next) => {
    const categorias = await getAllCategorias();
    const pack = await getAllPacotes();
    const add = await getAllAddtionals();
    console.log(add, pack, categorias);
    res.render('index', {
      title: '| Aproveite nossas ofertas',
      categorias,
      pack,
      add,
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

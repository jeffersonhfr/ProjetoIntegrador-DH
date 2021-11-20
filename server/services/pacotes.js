const { Package } = require('../database/models');
// const { getAllAddtionals } = require('./adicionais');

const pacotesServices = {};

pacotesServices.getAllPacotes = async () => {
  const pacotes = await Package.findAll({
    include: [
      { association: 'categoria' },
      // { association: 'categorias' },
      // { association: 'pacote' },
    ],
  });

  return pacotes;
};

module.exports = pacotesServices;

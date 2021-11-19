const { Package } = require('../database/models');

const pacotesServices = {};

pacotesServices.getAllPacotes = async () => {
  const pacotes = await Package.findAll({
    include: [
      { association: 'categorias' },
      // { association: 'categoria' },
      // { association: 'pacote' },
    ],
  });

  return pacotes;
};

module.exports = pacotesServices;

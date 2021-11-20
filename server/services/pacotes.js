const { Package } = require('../database/models');

const pacotesServices = {};

pacotesServices.getAllPacotes = async () => {
  const pacotes = await Package.findAll({
    include: [
      { association: 'categoria' },
      { association: 'adicional' },
      { association: 'order' },
    ],
  });

  return pacotes;
};

module.exports = pacotesServices;

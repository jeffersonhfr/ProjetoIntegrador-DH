const { Addtional } = require('../database/models');

const adicionaisServices = {};

adicionaisServices.getAllAddtionals = async () => {
  const adicionais = await Addtional.findAll({
    order: [['nomeAdicional', 'ASC']],
    include: [
      // { association: 'categoria' },
      // { association: 'categorias' },
      { association: 'pacotes' },
    ],
  });

  return adicionais;
};

module.exports = adicionaisServices;

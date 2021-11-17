const { Categorias } = require('../database/models');

const categoriaServices = {};

pacotesServices.getAllCategoria = async () => {
  const categorias = await Categorias.findAll({
    include: [{ association: 'categoriaPacotes' }],
  });
  return categorias;
};

module.exports = categoriaServices;

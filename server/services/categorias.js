const { Category } = require('../database/models');

const categoriasServices = {};

categoriasServices.getAllCategorias = async () => {
  const categorias = await Category.findAll({
    order: [['nomeCategoria', 'ASC']],
    include: [
      // { association: 'categoria' },
      // { association: 'categorias' },
      // { association: 'pacote' },
    ],
  });

  return categorias;
};

module.exports = categoriasServices;

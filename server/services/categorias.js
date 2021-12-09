const { Category } = require('../database/models');

const categoriasServices = {};

categoriasServices.getAllCategorias = async () => {
  const categorias = await Category.findAll({
    order: [['nomeCategoria', 'ASC']],
  });

  return categorias;
};

categoriasServices.createCategoria = async (categoria) => {
  const created = await Category.create({ ...categoria });
  return created;
};

categoriasServices.updateCategoria = async (id, categoria) => {
  const updated = await Category.update(
    { ...categoria },
    {
      where: { id },
    },
  );
  return updated;
};

categoriasServices.destroyCategoria = async (id) => {
  return await Category.destroy({ where: { id } });
};

module.exports = categoriasServices;

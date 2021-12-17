const { Category } = require('../database/models');
const { Package } = require('../database/models');
const { Category_Package } = require('../database/models');

const categoriasServices = {};

categoriasServices.getPackageByCategory = async (categoryId) => {
  const categoria = await Category_Package.findAll({
    where: { categoryId },
    include: [{ association: 'pacotes' }, { association: 'categorias' }],
  });
  return categoria;
};

// pacotesServices.getAllPackages = async () => {
//   const pacotes = await Package.findAll({
//     include: [
//       { association: 'categoria' },
//       { association: 'adicional' },
//       { association: 'package_images' },
//     ],
//   });

//   return pacotes;
// };

categoriasServices.getAllCategorias = async () => {
  const categorias = await Category.findAll({
    order: [['nomeCategoria', 'ASC']],
  });

  return categorias;
};

categoriasServices.getCategoriasById = async (id) => {
  const categoria = await Category.findAll({
    where: { id },
  });
  return categoria;
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

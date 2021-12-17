const { Category_Package } = require('../database/models');

const categoriaPacotesServices = {};

categoriaPacotesServices.createCategoriaPacote = async (categoria) => {
   return await Category_Package.create({ ...categoria });
   
};

module.exports = categoriaPacotesServices;
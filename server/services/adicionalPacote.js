const { Addtional_Package } = require('../database/models');

const adicionalPacotesServices = {};

adicionalPacotesServices.createAddtionalPacote = async (adicional) => {
  const created = await Addtional_Package.create({ ...adicional });
  return created;
};

module.exports = adicionalPacotesServices;

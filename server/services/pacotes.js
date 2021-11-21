const { Package } = require('../database/models');

const pacotesServices = {};

pacotesServices.getAllPackages = async () => {
  const pacotes = await Package.findAll({
    include: [{ association: 'categoria' }, { association: 'adicional' }],
  });

  return pacotes;
};

pacotesServices.getPackagesById = async (id) => {
  const pacotes = await Package.findAll({
    where: { id },
    include: [{ association: 'categoria' }, { association: 'adicional' }],
  });

  return pacotes;
};

pacotesServices.getPackageOrders = async (id) => {
  const pacotes = await Package.findAll({
    where: { id },
    include: [{ association: 'categoria' }, { association: 'adicional' }],
  });

  return pacotes;
};

module.exports = pacotesServices;

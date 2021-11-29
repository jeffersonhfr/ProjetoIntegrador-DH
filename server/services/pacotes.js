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

pacotesServices.createPacote = async (pacote) => {
  const created = await Package.create({ ...pacote });
  return created;
};

pacotesServices.updatePacote = async (id, pacote) => {
  const updated = await Package.update(
    { ...pacote },
    {
      where: { id },
    },
  );
  return updated;
};

pacotesServices.destroyPacote = async (id) => {
  return await Package.destroy({ where: { id } });
};

module.exports = pacotesServices;

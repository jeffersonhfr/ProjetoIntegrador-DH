const { Package } = require('../database/models');
const { Category_Package } = require('../database/models');
const { deleteImages, getAllImages } = require('./package_images');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const pacotesServices = {};

pacotesServices.getAllPackages = async () => {
  const pacotes = await Package.findAll({
    include: [
      { association: 'categoria' },
      { association: 'adicional' },
      { association: 'package_images' },
    ],
  });

  return pacotes;
};

pacotesServices.getPackagesByDestiny = async (nacional) => {
  const pacotes = await Package.findAll({
    where: { nacional },
    include: [
      { association: 'categoria' },
      { association: 'adicional' },
      { association: 'package_images' },
    ],
  });

  return pacotes;
};

pacotesServices.getPackagesById = async (id) => {
  const pacotes = await Package.findOne({
    where: { id },
    include: [
      { association: 'categoria' },
      { association: 'adicional' },
      { association: 'package_images' },
    ],
  });

  return pacotes;
};

pacotesServices.getPackagesByCategory = async (nomeCategoria) => {
  const pacotes = await Package.findAll({
    include: [
      { association: 'categoria', where: { nomeCategoria } },
      { association: 'adicional' },
      { association: 'package_images' },
    ],
  });

  return pacotes;
};

pacotesServices.getPackagesByName = async (nomePacote) => {
  const query = `%${nomePacote}%`;
  return await Package.findAll({
    where: {
      nomePacote: { [Op.like]: query },
    },
    include: [
      { association: 'categoria' },
      { association: 'adicional' },
      { association: 'package_images' },
    ],
  });
};

pacotesServices.getPackageOrders = async (id) => {
  const pacotes = await Package.findAll({
    where: { id },
    raw: true,
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
  // pacotesServices.getPackagesById(id).package_images.foreach(async (img) => await deleteImages(img.id));

  return await pacotesServices
    .getPackagesById(id)
    .then((i) =>
      i[0].package_images.forEach(async (img) => {
        try {
          await deleteImages(img.id);
        } catch (err) {
          return err;
        }
      }),
    )
    .then((i) => Package.destroy({ where: { id } }));
};

module.exports = pacotesServices;

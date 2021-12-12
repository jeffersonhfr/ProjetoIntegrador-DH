const { package_image } = require('../database/models');
const fs = require('fs');
const path = require('path');
const imagesServices = {};

imagesServices.getAllImages = async (packageId) => {
  return await package_image.findAll({
    where: { packageId },
  });
};

imagesServices.createImages = async (images) => {
  return await package_image.create(images);
};

imagesServices.deleteImages = async (id) => {
  try {
    const caminho = await package_image.findAll({ where: { id }, raw: true });
    console.log(caminho);
    fs.unlink(path.join(__dirname, '..', 'public', caminho[0].src), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    console.log(caminho[0].src);
  } catch (err) {
    console.log(err);
    return err;
  }

  return await package_image.destroy({ where: { id } });
};

module.exports = imagesServices;

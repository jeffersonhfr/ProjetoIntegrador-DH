const { package_image } = require('../database/models');

const imagesServices = {};


imagesServices.createImages = async (images) => {

    return await console.log(package_image.create(images))
  };



module.exports = imagesServices;

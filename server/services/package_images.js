const { package_image } = require('../database/models');
const fs = require('fs')
const path = require('path')
const imagesServices = {};

imagesServices.getAllImages = async (packageId) => {
  return await package_image.findAll({
    where: {packageId}
  });
};
imagesServices.createImages = async (images) => {

    return await package_image.create(images)
  };
imagesServices.deleteImages = async (id) => {
  try {
    fs.unlink(path.join(__dirname, '..', 'public', package_images.findAll({
      where: { id }
   
    }).src))  } catch(err){
 
    return err;
  }
  
    return await package_image.destroy(
      { where: { id } }
    );

}


module.exports = imagesServices;

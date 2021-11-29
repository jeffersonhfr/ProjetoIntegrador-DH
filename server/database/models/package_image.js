'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class package_image extends Model {

    static associate(models) {
      package_image.belongsTo(models.Package, {
        foreignKey: 'packageId',
        as: 'pacote',
      });
    }
  };
  package_image.init({
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'package_Image',
  });
  return package_image;
};
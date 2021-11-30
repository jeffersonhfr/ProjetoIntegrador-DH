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
    packageId: DataTypes.INTEGER,
    src: DataTypes.STRING
  }, {
    sequelize,
    timestamps:true,
    modelName: 'package_image',
  });
  return package_image;
};
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_Package extends Model {
    static associate(models) {
      // Category_Package.hasMany(models.Category, {
      //   as: 'categorias',
      //   foreignKey: 'categoryId',
      // });
      // Category_Package.hasMany(models.Package, {
      //   as: 'pacotes',
      //   foreignKey: 'packageId',
      // });
    }
  }
  Category_Package.init(
    {
      categoryId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Category_Package',
    },
  );
  return Category_Package;
};

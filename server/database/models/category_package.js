'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_Package extends Model {
    static associate(models) {}
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

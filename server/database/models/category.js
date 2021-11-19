'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Package, {
        as: 'pacote',
        through: 'Category_Packages',
        foreignKey: 'packageId',
      });
    }
  }
  Category.init(
    {
      nomeCategoria: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Category',
    },
  );
  return Category;
};

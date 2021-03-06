'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Package, {
        as: 'pacote',
        through: 'Category_Packages',
        foreignKey: 'categoryId',
      });
    }
  }
  Category.init(
    {
      nomeCategoria: DataTypes.STRING,
      corCategoria: DataTypes.STRING,
      imagemCategoria: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Category',
    },
  );
  return Category;
};

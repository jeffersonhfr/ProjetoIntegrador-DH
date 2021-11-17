'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Package, {
        as: 'pacotes',
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

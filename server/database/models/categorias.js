'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    static associate(models) {
      Categorias.hasMany(models.Categoriapacotes, {
        foreignKey: 'categoriaId',
      });
    }
  }
  Categorias.init(
    {
      nomeCategoria: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Categorias',
    },
  );
  return Categorias;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Pacote, {
        as: 'pacote',
      });
    }
  }
  Categoria.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Categoria',
    },
  );
  return Categoria;
};

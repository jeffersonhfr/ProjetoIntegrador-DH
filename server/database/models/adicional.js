'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adicional extends Model {
    static associate(models) {
      Adicional.hasMany(models.AdicionalPacote, {
        as: 'pacote',
      });
    }
  }
  Adicional.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Adicional',
    },
  );
  return Adicional;
};

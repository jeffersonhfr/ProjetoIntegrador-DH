'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adicionais extends Model {
    static associate(models) {
      Adicionais.hasMany(models.Adicionalpacotes, {
        foreignKey: 'adicionalId',
      });
    }
  }
  Adicionais.init(
    {
      nomeAdicional: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Adicionais',
    },
  );
  return Adicionais;
};

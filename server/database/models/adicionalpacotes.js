'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adicionalpacotes extends Model {
    static associate(models) {
      Adicionalpacotes.belongsTo(models.Pacotes, {
        foreignKey: 'adicionalPacoteId',
      });
      Adicionalpacotes.belongsTo(models.Adicionais, {
        foreignKey: 'adicionalId',
      });
    }
  }
  Adicionalpacotes.init(
    {
      adicionalAtivo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Adicionalpacotes',
    },
  );
  return Adicionalpacotes;
};

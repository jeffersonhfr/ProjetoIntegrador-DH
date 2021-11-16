'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdicionalPacote extends Model {
    static associate(models) {
      AdicionalPacote.belongsTo(models.Pacote, {
        foreignKey: 'pacoteId',
        as: 'pacote',
      });
      AdicionalPacote.belongsTo(models.Pacote, {
        foreignKey: 'adicionalId',
        as: 'adicional',
      });
    }
  }
  AdicionalPacote.init(
    {
      pacoteId: DataTypes.INTEGER,
      adicionalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'AdicionalPacote',
    },
  );
  return AdicionalPacote;
};

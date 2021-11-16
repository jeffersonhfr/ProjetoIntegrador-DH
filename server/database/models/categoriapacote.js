'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaPacote extends Model {
    static associate(models) {
      CategoriaPacote.belongsTo(models.Pacote, {
        foreignKey: 'pacoteId',
        as: 'pacote',
      });
      CategoriaPacote.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
        as: 'categoria',
      });
    }
  }
  CategoriaPacote.init(
    {
      pacoteId: DataTypes.INTEGER,
      categoriaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'CategoriaPacote',
    },
  );
  return CategoriaPacote;
};

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaPacote extends Model {
    static associate(models) {
      CategoriaPacote.belongsTo(models.Pacote, {
        foreignKey: 'pacoteId',
        as: 'pacote',
      });
      CategoriaPacote.hasMany(models.Categoria, {
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

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoriapacotes extends Model {
    static associate(models) {
      Categoriapacotes.belongsTo(models.Pacotes, {
        foreignKey: 'categoriaPacoteId',
      });
      Categoriapacotes.belongsTo(models.Categorias, {
        foreignKey: 'categoriaId',
      });
    }
  }
  Categoriapacotes.init(
    {
      categoriaAtiva: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Categoriapacotes',
    },
  );
  return Categoriapacotes;
};

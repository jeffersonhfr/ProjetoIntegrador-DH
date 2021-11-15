'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.belongsTo(models.PacoteCategoria, {
        foreignKey: 'categoriaId',
        as: 'categoria',
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

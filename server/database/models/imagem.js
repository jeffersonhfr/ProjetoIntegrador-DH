'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagem extends Model {
    static associate(models) {
      Imagem.belongsTo(models.ImagensPacote, {
        foreignKey: 'imagemId',
        as: 'imagem',
      });
    }
  }
  Imagem.init(
    {
      url: DataTypes.STRING,
      capa: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Imagem',
    },
  );
  return Imagem;
};

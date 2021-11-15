'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagensPacote extends Model {
    static associate(models) {
      ImagensPacote.hasMany(models.Imagem, {
        as: 'imagens',
      });
      ImagensPacote.belongsTo(models.Pacote, {
        foreignKey: 'pacoteId',
        as: 'pacote',
      });
    }
  }
  ImagensPacote.init(
    {
      pacoteId: DataTypes.INTEGER,
      imagemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'ImagensPacote',
    },
  );
  return ImagensPacote;
};

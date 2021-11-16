'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagensPacote extends Model {
    static associate(models) {
      ImagensPacote.belongsTo(models.Pacote, {
        foreignKey: 'pacoteId',
        as: 'pacote',
      });

      ImagensPacote.belongsTo(models.Imagem, {
        foreignKey: 'imagemId',
        as: 'imagem',
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

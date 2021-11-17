'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      Package.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'categorias',
      });
      Package.belongsTo(models.Addtional, {
        foreignKey: 'addtionalId',
        as: 'adicionais',
      });
    }
  }
  Package.init(
    {
      nomePacote: DataTypes.STRING,
      nomeHotel: DataTypes.STRING,
      diarias: DataTypes.INTEGER,
      passagemAerea: DataTypes.BOOLEAN,
      nacional: DataTypes.BOOLEAN,
      preco: DataTypes.INTEGER,
      promocaoPorcentagem: DataTypes.INTEGER,
      parcelas: DataTypes.INTEGER,
      imagemCapa: DataTypes.STRING,
      imagem01: DataTypes.STRING,
      imagem02: DataTypes.STRING,
      imagem03: DataTypes.STRING,
      imagem04: DataTypes.STRING,
      imagem05: DataTypes.STRING,
      imagem06: DataTypes.STRING,
      sobre: DataTypes.STRING,
      pontoTuristico: DataTypes.STRING,
      addtionalId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Package',
    },
  );
  return Package;
};

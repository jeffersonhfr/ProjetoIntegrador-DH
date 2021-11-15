'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacote extends Model {
    static associate(models) {
      Pacote.hasMany(models.CategoriaPacote, {
        as: 'categoria',
      });
      Pacote.hasMany(models.AdicionalPacote, {
        as: 'adicional',
      });
    }
  }
  Pacote.init(
    {
      nomePacote: DataTypes.STRING,
      nomeHotel: DataTypes.STRING,
      diarias: DataTypes.INTEGER,
      passagemAerea: DataTypes.INTEGER,
      nacional: DataTypes.INTEGER,
      preco: DataTypes.INTEGER,
      promocaoPorcentagem: DataTypes.INTEGER,
      parcelas: DataTypes.INTEGER,
      sobre: DataTypes.STRING,
      pontoTuristico: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Pacote',
    },
  );
  return Pacote;
};

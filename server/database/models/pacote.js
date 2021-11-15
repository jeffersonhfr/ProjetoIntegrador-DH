'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pacote.init({
    nomePacote: DataTypes.STRING,
    nomeHotel: DataTypes.STRING,
    diarias: DataTypes.INTEGER,
    passagemAerea: DataTypes.INTEGER,
    nacional: DataTypes.INTEGER,
    preco: DataTypes.INTEGER,
    promocaoPorcentagem: DataTypes.INTEGER,
    parcelas: DataTypes.INTEGER,
    sobre: DataTypes.STRING,
    pontoTuristico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pacote',
  });
  return Pacote;
};
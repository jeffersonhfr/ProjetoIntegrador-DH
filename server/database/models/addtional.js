'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addtional extends Model {
    static associate(models) {
      // define association here
    }
  }
  Addtional.init(
    {
      nomeAdicional: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Addtional',
    },
  );
  return Addtional;
};

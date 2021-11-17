'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addtional extends Model {
    static associate(models) {
      Addtional.hasMany(models.Package, {
        as: 'pacotes',
      });
    }
  }
  Addtional.init(
    {
      nomeExtra: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Addtional',
    },
  );
  return Addtional;
};

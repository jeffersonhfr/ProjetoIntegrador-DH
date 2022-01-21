'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addtional extends Model {
    static associate(models) {
      Addtional.belongsToMany(models.Package, {
        as: 'pacotes',
        through: 'Addtional_Package',
        foreignKey: 'addtionalId',
      });
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

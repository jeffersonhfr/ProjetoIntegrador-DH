'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addtional_Package extends Model {
    static associate(models) {}
  }
  Addtional_Package.init(
    {
      addtionalId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Addtional_Package',
    },
  );
  return Addtional_Package;
};

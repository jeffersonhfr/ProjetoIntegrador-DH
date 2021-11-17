'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'usuario',
      });
      Order.belongsTo(models.Package, {
        foreignKey: 'packageId',
        as: 'pacote',
      });
    }
  }
  Order.init(
    {
      valor: DataTypes.INTEGER,
      parcelamento: DataTypes.INTEGER,
      formaPagamento: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Order',
    },
  );
  return Order;
};

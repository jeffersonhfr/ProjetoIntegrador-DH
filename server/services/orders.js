const { Order, package_image } = require('../database/models');

const ordersServices = {};

ordersServices.getAllOrders = async () => {
  const pedidos = await Order.findAll({
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getOrdesById = async (userId) => {
  const pedidos = await Order.findAll({
    where: { userId },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

module.exports = ordersServices;

const { Order, package_image } = require('../database/models');

const ordersServices = {};

ordersServices.getAllOrders = async () => {
  const pedidos = await Order.findAll({
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getAllOrdesByUserId = async (userId) => {
  const pedidos = await Order.findAll({
    where: { userId },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getOneOrdesById = async (id) => {
  const pedidos = await Order.findAll({
    where: { id },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.createOrder = async (order) => {
  const pedidos = await Order.create({ ...order });
  return pedidos;
};

module.exports = ordersServices;

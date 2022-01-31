const { Order, package_image } = require('../database/models');

const ordersServices = {};

ordersServices.getAllOrders = async () => {
  const pedidos = await Order.findAll({
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getAllOrdesByUserId = async (userId) => {
  const pedidos = await Order.findOne({
    where: { userId },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getOneOrdesById = async (id) => {
  const pedidos = await Order.findOne({
    where: { id },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.createOrder = async (order) => {
  const pedidos = await Order.create({ ...order });
  return pedidos;
};

ordersServices.updateOrder = async (id, order) => {
  const updated = await Order.update(
    { ...order },
    {
      where: { id },
    },
  );
  return updated;
};

module.exports = ordersServices;

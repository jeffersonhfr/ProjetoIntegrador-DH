const { Order } = require('../database/models');

const ordersServices = {};

ordersServices.getAllOrders = async () => {
  const pedidos = await Order.findAll({
    include: [
      // { association: 'categoria' },
      // { association: 'pedidos' },
      // { association: 'pacote' },
    ],
  });

  return pedidos;
};

module.exports = ordersServices;

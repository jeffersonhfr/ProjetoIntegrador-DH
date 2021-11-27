const { Order } = require('../database/models');

const ordersServices = {};

ordersServices.getAllOrders = async () => {
  const pedidos = await Order.findAll({
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pedidos;
};

ordersServices.getOrdesById = async (id) => {
  const pacotes = await Order.findAll({
    where: { id },
    include: [{ association: 'pacote' }, { association: 'usuario' }],
  });

  return pacotes;
};

module.exports = ordersServices;

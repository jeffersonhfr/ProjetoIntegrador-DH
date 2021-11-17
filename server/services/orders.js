const { Order } = require('../database/models');

const orderServices = {};

orderServices.getAllOrders = async () => {
  const order = await Order.findAll({
    include: [{ association: 'usuario' }, { association: 'pacote' }],
  });
  return order;
};

module.exports = orderServices;

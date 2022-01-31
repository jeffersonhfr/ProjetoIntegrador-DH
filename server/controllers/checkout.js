const { createOrder } = require('../services/orders');

const controller = {
  sucesso: async (req, res, next) => {
    try {
      const { idPacote, pagamento, valorPago, parcelas, userId } = req.body;

      if (pagamento === 'Boleto Bancário') {
        const status = 'Aguardando Pagamento';

        let order = {};
        order.valor = valorPago;
        order.parcelamento = 1;
        order.formaPagamento = pagamento;
        order.status = status;
        order.pedidoAtivo = 1;
        order.packageId = idPacote;
        order.userId = userId;

        const addOrder = await createOrder(order);

        return res.status(200).json({
          order,
          pagamento,
        });
      } else {
        let status = 'Pagamento Aprovado';
        let order = {};
        order.valor = valorPago;
        order.parcelamento = parcelas;
        order.formaPagamento = pagamento;
        order.status = status;
        order.pedidoAtivo = 1;
        order.packageId = idPacote;
        order.userId = userId;
        const addOrder = await createOrder(order);

        return res.status(200).json({
          order,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor' });
    }
  },
};

module.exports = controller;

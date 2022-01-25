const { getPackagesById } = require('../services/pacotes');
const { createOrder } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    try {
      // const { idPacote } = req.body;
      const idPacote = 2;
      const pack = await getPackagesById(idPacote);
      return res.status(200).json({
        title: '| Checkout',
        idPacote,
        pack,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  sucesso: async (req, res, next) => {
    try {
      //Manual
      // const idPacote = 1;
      // const pagamento = 'Cartão de Crédito';
      // const valorPago = '18000';
      // const parcelas = 3;
      // const imagem = 'disney01.jpg';
      // const user = 2;

      const { idPacote, pagamento, valorPago, parcelas, imagem } = req.body;
      const user = req.cookies.usuario.id;

      if (pagamento === 'Boleto Bancário') {
        const status = 'Aguardando Pagamento';

        let order = {};
        order.valor = valorPago;
        order.parcelamento = 1;
        order.formaPagamento = pagamento;
        order.status = status;
        order.pedidoAtivo = 1;
        order.packageId = idPacote;
        order.userId = user;

        const addOrder = await createOrder(order);
        if (addOrder) {
          return res.status(200).json({
            title: '| Pacote adquirido com sucesso',
            order,
            pagamento,
            imagem,
          });
        }
      } else {
        let status = 'Pagamento Aprovado';
        let order = {};
        order.valor = valorPago;
        order.parcelamento = parcelas;
        order.formaPagamento = pagamento;
        order.status = status;
        order.pedidoAtivo = 1;
        order.packageId = idPacote;
        order.userId = user;
        const addOrder = await createOrder(order);
        if (addOrder) {
          return res.status(200).json({
            title: '| Pacote adquirido com sucesso',
            order,
            imagem,
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
};

module.exports = controller;

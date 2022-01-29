const { getPackagesById } = require('../services/pacotes');
const { createOrder } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    try {
      const { idPacote } = req.body;
      
      const pack = await getPackagesById(idPacote);

      if(!pack)
        return res.status(404).send({message:"Esse pacote não existe ou não está mais disponível"});

      return res.status(200).json({
        pack
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor'});
    }
  },
  sucesso: async (req, res, next) => {
    try {

      const { idPacote, pagamento, valorPago, parcelas, imagem } = req.body;
      const user = req.userId;

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

          return res.status(200).json({
            order,
            pagamento,
            imagem,
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
        order.userId = user;
        const addOrder = await createOrder(order);

          return res.status(200).json({
            order,
            imagem,});
  
        
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor'});
    }
  },
};

module.exports = controller;

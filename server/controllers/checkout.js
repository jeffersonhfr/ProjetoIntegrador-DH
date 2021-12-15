const { getPackagesById } = require('../services/pacotes');
const { createOrder } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    const { idPacote } = req.body;
    const pack = await getPackagesById(idPacote);
    res.render('checkout', {
      title: '| Checkout',
      idPacote,
      pack,
      valor: (valor) => {
        return valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  create: async (req, res, next) => {
    const create = await createAddtionals(req.body);

    if (create) {
      res.redirect('../listarAdicional');
    } else {
      res.status(500).send('Erro ao criar sua categoria');
    }
  },
  sucesso: async (req, res, next) => {
    const { idPacote, pagamento, valorPago, parcelas, imagem } = req.body;
    const user = req.cookies.usuario.id;

    if (pagamento === 'boleto') {
      const status = 'Aguardando Pagamento';

      let order = {};
      order.valor = valorPago;
      order.parcelamento = 1;
      order.formaPagamento = pagamento;
      order.status = status;
      order.pedidoAtivo = 1;
      order.packageId = idPacote;
      order.userId = user;
      console.log('\n\n ORDER: ' + valorPago);

      const addOrder = await createOrder(order);
      if (addOrder) {
        res.render('checkout-sucesso', {
          title: '| Pacote adquirido com sucesso',
          order,
          pagamento,
          imagem,
          usuarioLogado: req.cookies.usuario,
          usuarioAdmin: req.cookies.admin,
          usuarioAvatar: req.cookies.avatar,
        });
      } else {
        res.status(500).send('Erro ao finalizar sua compra');
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

      console.log('\n\n ORDER: ' + valorPago);

      const addOrder = await createOrder(order);
      if (addOrder) {
        res.render('checkout-sucesso', {
          title: '| Pacote adquirido com sucesso',
          order,
          imagem,
          usuarioLogado: req.cookies.usuario,
          usuarioAdmin: req.cookies.admin,
          usuarioAvatar: req.cookies.avatar,
        });
      } else {
        res.status(500).send('Erro ao finalizar sua compra');
      }
    }
  },
};

module.exports = controller;

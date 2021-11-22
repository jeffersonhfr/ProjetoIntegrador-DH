const { getAllOrders } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    const { idPacote, idNome, idFoto, idValor } = req.body;
    const orders = await getAllOrders();
    res.render('checkout', {
      title: '| Checkout',
      idPacote,
      idNome,
      idFoto,
      idValor,
      orders,
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
  sucesso: (req, res, next) => {
    const { pagamento } = req.body;
    if (pagamento === 'boleto') {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
        pagamento,
      });
    } else {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    }
  },
};

module.exports = controller;

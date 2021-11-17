const { getAllOrders } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    const orders = await getAllOrders();
    console.log(orders);
    res.render('checkout', {
      title: '| Checkout',
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

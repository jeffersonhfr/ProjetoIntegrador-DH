const controller = {
  index: (req, res, next) => {
    res.render('checkout', {
      title: '| Checkout',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  },
  sucesso: (req, res, next) => {
    const { pagamento } = req.body;
    if (pagamento === 'boleto') {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        pagamento,
      });
    } else {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
      });
    }
  },
};

module.exports = controller;

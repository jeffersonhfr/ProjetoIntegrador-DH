const { getAllOrders, getOrdesById } = require('../services/orders');

const controller = {
  index: async (req, res, next) => {
    const orders = await getAllOrders();
    console.log(orders);

    res.render('historico', {
      title: '| Histórico de Viagens',
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
  details: async (req, res, next) => {
    const { id } = req.params;
    const orders = await getAllOrders(id);
    console.log(orders);
    if (!id) {
      res.status(400).send('Ops... não encontramos o seu pacote');
    }
    res.render('historico-detalhes', {
      title: '| Histórico de Viagens',
      orders,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

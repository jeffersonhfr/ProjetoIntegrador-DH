const { getPackagesById } = require('../services/pacotes');
const { getAllOrders } = require('../services/orders');

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
  sucesso: async (req, res, next) => {
    const { idPacote, pagamento } = req.body;
    const pack = await getPackagesById(idPacote);
    console.log(pack);
    if (pagamento === 'boleto') {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        pack,
        pagamento,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    } else {
      res.render('checkout-sucesso', {
        title: '| Pacote adquirido com sucesso',
        pack,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    }
  },
};

module.exports = controller;

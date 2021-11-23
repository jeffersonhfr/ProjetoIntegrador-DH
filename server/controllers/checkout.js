const { getAllOrders } = require('../services/orders');
const { getAllPackages } = require('../services/pacotes');
const { getPackagesById } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const { idPacote, idUrl } = req.body;
    const pack = await getPackagesById(idPacote);
    console.log(pack);
    console.log(idUrl);
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

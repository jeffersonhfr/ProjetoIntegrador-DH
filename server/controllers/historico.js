const { getAllOrders, getOrdesById } = require('../services/orders');
const { getOneImagesById } = require('../services/package_images');

const controller = {
  index: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    const orders = await getOrdesById(id);
    const imagens = [];

    for (let order of orders) {
      let imagem = await getOneImagesById(order.PackageId);
      imagens.push(imagem);
    }
    console.log(orders);

    res.render('historico', {
      title: '| Histórico de Viagens',
      orders,
      imagens,
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
    const { idUsuario } = req.cookies.usuario;
    const orders = await getAllOrders(id, idUsuario);
    console.log(orders[0].userId);
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

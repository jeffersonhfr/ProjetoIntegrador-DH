const {
  getAllOrders,
  getAllOrdesByUserId,
  getOneOrdesById,
} = require('../services/orders');
const { getOneImagesById } = require('../services/package_images');

const controller = {
  index: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    console.log('id: ' + id);
    const orders = await getAllOrdesByUserId(id);

    const imagens = [];
    for (let order of orders) {
      let imagem = await getOneImagesById(order.PackageId);
      imagens.push(imagem);
    }

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
    const orders = await getOneOrdesById(id);
    const imagem = await getOneImagesById(orders[0].PackageId);

    let user = req.cookies.usuario.id;

    if (user !== orders[0].userId) {
      console.log('\n\n' + 'diferente');
      res.redirect('../minhas-viagens');
    }

    res.render('historico-detalhes', {
      title: '| Histórico de Viagens',
      orders,
      imagem,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

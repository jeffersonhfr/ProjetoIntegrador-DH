const {
  getAllOrders,
  getAllOrdesByUserId,
  getOneOrdesById,
  updateOrder,
} = require('../services/orders');
const { getOneImagesById } = require('../services/package_images');

const controller = {
  index: async (req, res, next) => {
    const { id } = req.cookies.usuario;
    console.log('id: ' + id);
    const orders = await getAllOrdesByUserId(id);

    if (orders == '') {
      res.render('historico-null', {
        title: '| Histórico de Viagens',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin,
        usuarioAvatar: req.cookies.avatar,
      });
    }

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
      data: (data) => {
        let dataTimeStamp = new Date(data).toISOString();

        let d = new Date(dataTimeStamp);
        let ye = new Intl.DateTimeFormat('pt', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('pt', { month: 'long' }).format(d);
        let da = new Intl.DateTimeFormat('pt', { day: '2-digit' }).format(d);
        let ho = new Intl.DateTimeFormat('pt', { hour: '2-digit' }).format(d);
        let mi = new Intl.DateTimeFormat('pt', { minute: '2-digit' }).format(d);
        let datafinal = `${da}/${mo}/${ye} - ${ho}:${mi}`;

        return datafinal;
      },
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
  update: async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('Ops... não encontramos a sua categoria');
    }

    let order = {};
    order.pedidoAtivo = 0;
    order.status = 'Pedido Cancelado';

    console.log('\n\n\n Order:' + order);
    const update = await updateOrder(id, order);
    if (update) {
      res.redirect('../../minhas-viagens');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
};

module.exports = controller;

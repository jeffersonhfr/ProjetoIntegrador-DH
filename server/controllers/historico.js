const {
  getAllOrders,
  getAllOrdesByUserId,
  getOneOrdesById,
  updateOrder,
} = require('../services/orders');
const { getOneImagesById } = require('../services/package_images');

const controller = {
  index: async (req, res, next) => {
    try {
      // const { id } = req.cookies.usuario;
      const id = 1;
      const orders = await getAllOrdesByUserId(id);

      if (orders == '') {
        return res.status(200).json({
          title: '| Histórico de Viagens',
        });
      } else {
        const imagens = [];
        for (let order of orders) {
          let imagem = await getOneImagesById(order.PackageId);
          imagens.push(imagem);

          return res.status(200).json({
            title: '| Histórico de Viagens',
            orders,
            imagens,
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  todos: async (req, res, next) => {
    try {
      const orders = await getAllOrders();
      const imagens = [];
      for (let order of orders) {
        let imagem = await getOneImagesById(order.PackageId);
        imagens.push(imagem);
      }

      return res.status(200).json({
        title: '| Histórico de Viagens',
        orders,
        imagens,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  details: async (req, res, next) => {
    try {
      // const { id } = req.params;
      // let user = req.cookies.usuario.id;

      const id = 4;
      let user = 1;
      const orders = await getOneOrdesById(id);
      const imagem = await getOneImagesById(orders[0].PackageId);

      if (user !== orders[0].userId) {
        return res.status(200).json({
          title: '| Você não tem acesso',
        });
      }

      return res.status(200).json({
        title: '| Histórico de Viagens',
        orders,
        imagem,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  update: async (req, res, next) => {
    try {
      // const { id } = req.params;
      const id = 5;
      let order = {};
      order.pedidoAtivo = 0;
      order.status = 'Pedido Cancelado';

      const update = await updateOrder(id, order);
      if (update) {
        return res.status(200).json({
          Mensagem: 'Pedido Atualizado',
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
};

module.exports = controller;

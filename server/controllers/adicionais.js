const {
  getAllAddtionals,
  getAddtionalsById,
  createAddtionals,
  updateAddtionals,
  destroyAddtionals,
} = require('../services/adicionais');

const controller = {
  index: async (req, res, next) => {
    try {
      const adicionais = await getAllAddtionals();
      return res.status(200).json({
        title: '| Listar Adicionais',
        adicionais,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  add: async (req, res, next) => {
    try {
      return res.status(200).json({
        title: '| Cadastrar Adicionais',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  create: async (req, res, next) => {
    const create = await createAddtionals(req.body);

    if (create) {
      res.redirect('../listarAdicional');
    } else {
      res.status(500).send('Erro ao criar sua categoria');
    }
  },
  edit: async (req, res, next) => {
    try {
      //manual
      const id = 1;

      // const { id } = req.params;
      const adicional = await getAddtionalsById(id);

      return res.status(200).json({
        title: '| Editar Categoria',
        adicional,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }

    res.render('adicional-edit', {
      title: '| Editar Categoria',
      adicional,
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

    const update = await updateAddtionals(id, req.body);
    if (update) {
      res.redirect('../../listarAdicional');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
  delete: (req, res, next) => {
    res.redirect('../../listarAdicional');
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const destroy = await destroyAddtionals(id);
    if (destroy) {
      res.redirect('../../listarAdicional');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
};

module.exports = controller;

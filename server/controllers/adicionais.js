const {
  getAllAddtionals,
  getAddtionalsById,
  createAddtionals,
  updateAddtionals,
  destroyAddtionals,
} = require('../services/adicionais');

const controller = {
  index: async (req, res, next) => {
    const adicionais = await getAllAddtionals();
    console.log(adicionais);
    res.render('adicional-list', {
      title: '| Listar Adicionais',
      adicionais,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  add: async (req, res, next) => {
    res.render('adicional-add', {
      title: '| Cadastrar Adicionais',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
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
    const { id } = req.params;
    const adicional = await getAddtionalsById(id);
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

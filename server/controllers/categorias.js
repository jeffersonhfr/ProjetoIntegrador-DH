const {
  getAllCategorias,
  createCategoria,
  updateCategoria,
  destroyCategoria,
} = require('../services/categorias');

const controller = {
  index: async (req, res, next) => {
    const categoria = await getAllCategorias();
    console.log(categoria);
    res.render('categoria-list', {
      title: '| Listar Categoria',
      categoria,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  add: async (req, res, next) => {
    res.render('categoria-add', {
      title: '| Adicionar Categoria',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  create: async (req, res, next) => {
    console.log(req.file.filename);
    console.log(req.body);

    if (req.file) {
      var imagemCategoria = `${req.file.filename}`;
    } else {
      var imagemCategoria = '';
    }

    const dataCategory = {
      nomeCategoria: req.body.nomeCategoria,
      corCategoria: req.body.corCategoria + 'aa',
      imagemCategoria: imagemCategoria,
    };

    const create = await createCategoria(dataCategory);

    if (create) {
      res.redirect('../listarCategoria');
    } else {
      res.status(500).send('Erro ao criar sua categoria');
    }
  },
  edit: async (req, res, next) => {
    // const { id } = req.params;
    // const pack = await getPackagesById(id);
    // const categorias = await getAllCategorias();
    // const adicionais = await getAllAddtionals();
    // console.log(pack);
    // console.log(categorias);
    // console.log(adicionais);
    // res.render('pacote-edit', {
    //   title: '| Pacote',
    //   pack,
    //   categorias,
    //   adicionais,
    //   usuarioLogado: req.cookies.usuario,
    //   usuarioAdmin: req.cookies.admin,
    //   usuarioAvatar: req.cookies.avatar,
    // });
  },
  update: async (req, res, next) => {
    // const { id } = req.params;
    // if (!id) {
    //   res.status(400).send('Ops... não encontramos o seu to do');
    // }
    // const update = await updatePacote(id, req.body);
    // if (update) {
    //   res.redirect('../../pacotes');
    // } else {
    //   res.status(500).send('Ops... deu ruim...');
    // }
  },
  delete: (req, res, next) => {
    // res.redirect('../../pacotes');
  },
  destroy: async (req, res, next) => {
    // const { id } = req.params;
    // const destroy = await destroyPacote(id);
    // if (destroy) {
    //   res.redirect('../../pacotes');
    // } else {
    //   res.status(500).send('Ops... deu ruim...');
    // }
  },
};

module.exports = controller;

const {
  getAllCategorias,
  getCategoriasById,
  createCategoria,
  updateCategoria,
  destroyCategoria,
  getPackageByCategory,
} = require('../services/categorias');
const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
  updatePacote,
  getPackagesByDestiny,
  getPackagesByName,
} = require('../services/pacotes');

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
      corCategoria: req.body.corCategoria,
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
    const { id } = req.params;
    const categoria = await getCategoriasById(id);
    res.render('categoria-edit', {
      title: '| Editar Categoria',
      categoria,
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

    if (req.file) {
      var imagemCategoria = `${req.file.filename}`;
      const dataCategory = {
        nomeCategoria: req.body.nomeCategoria,
        corCategoria: req.body.corCategoria,
        imagemCategoria: imagemCategoria,
      };
      const update = await updateCategoria(id, dataCategory);
      if (update) {
        res.redirect('../../listarCategoria');
      } else {
        res.status(500).send('Ops... deu ruim...');
      }
    } else {
      const dataCategory = {
        nomeCategoria: req.body.nomeCategoria,
        corCategoria: req.body.corCategoria,
      };
      const update = await updateCategoria(id, dataCategory);
      if (update) {
        res.redirect('../../listarCategoria');
      } else {
        res.status(500).send('Ops... deu ruim...');
      }
    }
  },
  delete: (req, res, next) => {
    res.redirect('../../listarCategoria');
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const destroy = await destroyCategoria(id);
    if (destroy) {
      res.redirect('../../listarCategoria');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
};

module.exports = controller;

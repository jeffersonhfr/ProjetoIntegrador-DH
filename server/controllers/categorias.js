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
    try {
      const categoria = await getAllCategorias();
      return res.status(200).json({
        title: '| Listar Categoria',
        categoria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  add: async (req, res, next) => {
    try {
      return res.status(200).json({
        title: '| Adicionar Categoria',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
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
    try {
      const id = 1;
      // const { id } = req.params;

      const categoria = await getCategoriasById(id);
      return res.status(200).json({
        title: '| Editar Categoria',
        categoria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
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

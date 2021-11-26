const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
} = require('../services/pacotes');

const { getAllCategorias } = require('../services/categorias');
const { getAllAddtionals } = require('../services/adicionais');

const controller = {
  index: async (req, res, next) => {
    const pack = await getAllPackages();
    res.render('pacotes', {
      title: '| Pacote',
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
  add: async (req, res, next) => {
    const categorias = await getAllCategorias();
    const adicionais = await getAllAddtionals();
    console.log(categorias);
    console.log(adicionais);
    res.render('adicionar-pacote', {
      title: '| Adicionar Pacote',
      categorias,
      adicionais,
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
  create: async (req, res, next) => {
    const create = await createPacote(req.body);

    if (create) {
      res.redirect('../pacotes');
    } else {
      res.status(500).send('Erro ao criar seu pacote');
    }
  },
  show: async (req, res, next) => {
    let origem = req.originalUrl;
    const { id } = req.params;
    const pack = await getPackagesById(id);
    console.log(pack);
    res.render('pacote', {
      title: '| Pacote',
      pack,
      origem,
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
  edit: async (req, res, next) => {
    const { id } = req.params;
    const pack = await getPackagesById(id);
    const categorias = await getAllCategorias();
    const adicionais = await getAllAddtionals();
    console.log(pack);
    console.log(categorias);
    console.log(adicionais);
    res.render('pacote-edit', {
      title: '| Pacote',
      pack,
      categorias,
      adicionais,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  update: async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send('Ops... não encontramos o seu to do');
    }

    const update = await updateTodo(id, req.body);

    if (update) {
      const todos = await getAllTodos();
      res.render('todos', {
        title: `To Dos`,
        todos,
      });
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
  delete: (req, res, next) => {
    res.redirect('../../pacotes');
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const destroy = await destroyPacote(id);

    if (destroy) {
      res.redirect('../../pacotes');
    } else {
      res.status(500).send('Ops... deu ruim...');
    }
  },
};

module.exports = controller;

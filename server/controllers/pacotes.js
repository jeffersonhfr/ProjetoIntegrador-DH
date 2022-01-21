const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
  updatePacote,
  getPackagesByDestiny,
  getPackagesByName,
  getPackagesByCategory,
} = require('../services/pacotes');
const { createImages } = require('../services/package_images');
const fs = require('fs');

const { getAllCategorias } = require('../services/categorias');
const { createCategoriaPacote } = require('../services/categoriaPacote');
const { getAllAddtionals } = require('../services/adicionais');
const { createAddtionalPacote } = require('../services/adicionalPacote');

const controller = {
  index: async (req, res, next) => {
    const query = req.query.destino;
    const queryCategoria = req.query.categoria;

    if (queryCategoria) {
      try {
        const pacotes = await getPackagesByCategory(queryCategoria);
        return res.status(200).json({
          title: '| Pacotes: ' + queryCategoria,
          tituloPacotes: 'Pacotes por categoria: ' + queryCategoria,
          pacotes: pacotes,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro do servidor', error });
      }
    } else if (query == 'nacional') {
      try {
        const pacotes = await getPackagesByDestiny(1);
        return res.status(200).json({
          title: '| Pacote',
          tituloPacotes: 'Pacotes Nacionais',
          pacotes: pacotes,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro do servidor', error });
      }
    } else if (query == 'internacional') {
      try {
        const pacotes = await getPackagesByDestiny(0);
        return res.status(200).json({
          title: '| Pacote',
          tituloPacotes: 'Pacotes Internacionais',
          pacotes: pacotes,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro do servidor', error });
      }
    } else {
      try {
        const pacotes = await getAllPackages();
        return res.status(200).json({
          title: '| Pacote',
          tituloPacotes: 'Nossos Pacotes',
          pacotes: pacotes,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro do servidor', error });
      }
    }
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
    pacote = {};

    pacote.nomePacote = req.body.nomePacote;
    pacote.nomeHotel = req.body.nomeHotel;
    pacote.diarias = req.body.diarias;
    pacote.passagemAerea = req.body.passagemAerea;
    pacote.nacional = req.body.nacional;
    pacote.preco = req.body.preco;
    pacote.promocaoPorcentagem = req.body.promocaoPorcentagem;
    pacote.parcelas = req.body.parcelas;
    pacote.package_images = req.files;

    const create = await createPacote(pacote);

    const createImg = await pacote.package_images.forEach((element) =>
      createImages({
        packageId: create.id,
        src: '/assets/img/package/' + element.filename,
      }),
    );

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
      res.status(400).send('Ops... não encontramos o seu pacote');
    }

    const update = await updatePacote(id, req.body);

    if (update) {
      res.redirect('../../pacotes');
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

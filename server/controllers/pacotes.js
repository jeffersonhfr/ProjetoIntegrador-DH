const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
  updatePacote,
  getPackagesByName
} = require('../services/pacotes');
const {
  createImages
} = require('../services/package_images');
const fs = require('fs');

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
  
    if (req.files) {
  
      pacote = {}

      pacote.nomePacote = req.body.nomePacote
      pacote.nomeHotel = req.body.nomeHotel
      pacote.diarias = req.body.diarias
      pacote.passagemAerea = req.body.passagemAerea
      pacote.nacional = req.body.nacional
      pacote.preco = req.body.preco
      pacote.promocaoPorcentagem = req.body.promocaoPorcentagem
      pacote.parcelas = req.body.parcelas
      pacote.package_images = req.files

      const create = await createPacote(pacote)
    
      pacote.package_images.forEach(async (element) => {
        

          const createImg = await createImages( {packageId: create.id , src: '/assets/img/package/' + element.filename })
        return createImg;
        
      });
      


      if (create) {
        res.redirect('../pacotes');
        
        
      } else {
        res.status(500).send('Erro ao criar seu pacote');
        
  
      }
      
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

const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
  updatePacote,
} = require('../services/pacotes');

const { createAddtionalPacote } = require('../services/adicionalPacote');

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
    if (req.files['capa']) {
      var imagemCapa = `/assets/img/upload/${req.files['capa'][0].filename}`;
    } else {
      var imagemCapa = '';
    }

    if (req.files['imagem01']) {
      var imagem1 = `/assets/img/upload/${req.files['imagem01'][0].filename}`;
    } else {
      var imagem1 = '';
    }

    if (req.files['imagem02']) {
      var imagem2 = `/assets/img/upload/${req.files['imagem02'][0].filename}`;
    } else {
      var imagem2 = '';
    }

    if (req.files['imagem03']) {
      var imagem3 = `/assets/img/upload/${req.files['imagem03'][0].filename}`;
    } else {
      var imagem3 = '';
    }

    if (req.files['imagem04']) {
      var imagem4 = `/assets/img/upload/${req.files['imagem04'][0].filename}`;
    } else {
      var imagem4 = '';
    }

    if (req.files['imagem05']) {
      var imagem5 = `/assets/img/upload/${req.files['imagem05'][0].filename}`;
    } else {
      var imagem5 = '';
    }

    if (req.files['imagem06']) {
      var imagem6 = `/assets/img/upload/${req.files['imagem06'][0].filename}`;
    } else {
      var imagem6 = '';
    }

    const dataPackage = {
      nomePacote: req.body.nomePacote,
      nomeHotel: req.body.nomeHotel,
      diarias: req.body.diarias,
      preco: req.body.preco,
      promocaoPorcentagem: req.body.promocaoPorcentagem,
      parcelas: req.body.parcelas,
      imagemCapa: `${imagemCapa}`,
      imagem01: `${imagem1}`,
      imagem02: `${imagem2}`,
      imagem03: `${imagem3}`,
      imagem04: `${imagem4}`,
      imagem05: `${imagem5}`,
      imagem06: `${imagem6}`,
      sobre: req.body.sobre,
      pontoTuristico: req.body.pontoTuristico,
    };

    const create = await createPacote(dataPackage);

    if (create) {
      const dataAddPackage = {
        addtionalId: req.body.adicionalteste,
        packageId: create.id,
      };
      const createAdd = await createAddtionalPacote(dataAddPackage);

      if (createAdd) {
        res.redirect('../pacotes');
      }
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
    const pack = await getPackagesById(id);

    if (req.files['capa']) {
      console.log('0 existe');
      var imagemCapa = `/assets/img/upload/${req.files['capa'][0].filename}`;
    } else {
      console.log('0 nao existe');
      var imagemCapa = pack[0].imagemCapa;
    }

    if (req.files['imagem01']) {
      var imagem1 = `/assets/img/upload/${req.files['imagem01'][0].filename}`;
    } else {
      var imagem1 = pack[0].imagem01;
    }

    if (req.files['imagem02']) {
      var imagem2 = `/assets/img/upload/${req.files['imagem02'][0].filename}`;
    } else {
      var imagem2 = pack[0].imagem02;
    }

    if (req.files['imagem03']) {
      var imagem3 = `/assets/img/upload/${req.files['imagem03'][0].filename}`;
    } else {
      var imagem3 = pack[0].imagem03;
    }

    if (req.files['imagem04']) {
      var imagem4 = `/assets/img/upload/${req.files['imagem04'][0].filename}`;
    } else {
      var imagem4 = pack[0].imagem04;
    }

    if (req.files['imagem05']) {
      var imagem5 = `/assets/img/upload/${req.files['imagem05'][0].filename}`;
    } else {
      var imagem5 = pack[0].imagem05;
    }

    if (req.files['imagem06']) {
      var imagem6 = `/assets/img/upload/${req.files['imagem06'][0].filename}`;
    } else {
      var imagem6 = pack[0].imagem06;
    }

    const dataPackage = {
      nomePacote: req.body.nomePacote,
      nomeHotel: req.body.nomeHotel,
      diarias: req.body.diarias,
      preco: req.body.preco,
      promocaoPorcentagem: req.body.promocaoPorcentagem,
      parcelas: req.body.parcelas,
      imagemCapa: `${imagemCapa}`,
      imagem01: `${imagem1}`,
      imagem02: `${imagem2}`,
      imagem03: `${imagem3}`,
      imagem04: `${imagem4}`,
      imagem05: `${imagem5}`,
      imagem06: `${imagem6}`,
      sobre: req.body.sobre,
      pontoTuristico: req.body.pontoTuristico,
    };

    if (!id) {
      res.status(400).send('Ops... não encontramos o seu to do');
    }

    const update = await updatePacote(id, dataPackage);

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

const sobrePlaceholder = require('../data/sobrenos.json');
const fs = require('fs');
const path = require('path');

let { tituloPrincipal, tituloHistoria, textoHistoria } = sobrePlaceholder;

const controller = {
  index: (req, res, next) => {
    try {
      return res.status(200).json({
        title: '| Sobre',
        tituloPrincipal,
        tituloHistoria,
        textoHistoria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  list: (req, res, next) => {
    // let admin = req.cookies.admin;
    let admin = true;
    try {
      if (admin == false) {
        return res.status(200).json({
          title: '| Ajuda',
          erro: 'Você não tem autorização para visualizar essa página',
        });
      } else {
        return res.status(200).json({
          title: '| Ajuda',
          erro: '',
          tituloPrincipal,
          tituloHistoria,
          textoHistoria,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  update: (req, res, next) => {
    let ajuda = req.body;
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'sobrenos.json'),
      JSON.stringify(ajuda),
    );
    res.redirect('../sobre');
  },
};

module.exports = controller;

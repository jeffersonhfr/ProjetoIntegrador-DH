const usuariosPlaceholder = require('../data/usuariosPlaceholder.json');
const ajudaPlaceholder = require('../data/ajuda.json');
const fs = require('fs');
const util = require('util');
const path = require('path');

let {
  tituloPrincipal,
  tituloDuvidas,
  textoDuvidas,
  tituloCancelamentos,
  textoCancelamentos,
  tituloPolítica,
  textoPolítica,
} = ajudaPlaceholder;

const controller = {
  index: (req, res, next) => {
    try {
      return res.status(200).json({
        title: '| Ajuda',
        tituloPrincipal,
        tituloDuvidas,
        textoDuvidas,
        tituloCancelamentos,
        textoCancelamentos,
        tituloPolítica,
        textoPolítica,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  list: (req, res, next) => {
    // let admin = req.cookies.admin;
    let admin = false;
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
          tituloDuvidas,
          textoDuvidas,
          tituloCancelamentos,
          textoCancelamentos,
          tituloPolítica,
          textoPolítica,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
  update: async (req, res, next) => {
    let ajuda = await req.body;

    fs.writeFile(
      path.join(__dirname, '..', 'data', 'ajuda.json'),
      JSON.stringify(ajuda),
      (error) => {
        if (error) throw error;
        console.log('The file2.js has been saved!');
        res.redirect('../ajuda');
      },
    );
  },
};

module.exports = controller;

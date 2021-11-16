const { Pacote } = require('../database/models');

const pacotesServices = {};

pacotesServices.getAllPacotes = async () => {
  const pacotes = await Pacote.findAll({
    include: [
      { association: 'adicional' },
      { association: 'adicionalpacote' },
      { association: 'categoria' },
      { association: 'categoriaPacote' },
      { association: 'imagem' },
      { association: 'imagenspacote' },
    ],
  });
  return pacotes;
};

module.exports = pacotesServices;

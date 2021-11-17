const { Pacotes } = require('../database/models');

const pacotesServices = {};

pacotesServices.getAllPacotes = async () => {
  const pacotes = await Pacotes.findAll({
    include: [
      { association: 'categoriaPacotes' },
      { association: 'categorias' },
      { association: 'adicionalPacotes' },
      { association: 'adicionais' },
    ],
  });
  return pacotes;
};

module.exports = pacotesServices;

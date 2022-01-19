const { getAllCategorias } = require('../services/categorias');
const { getAllAddtionals } = require('../services/adicionais');
const { getAllPackages } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    try {
      const categorias = await getAllCategorias();
      const pack = await getAllPackages();
      return res.status(200).json({
        title: '| Aproveite nossas ofertas',
        categorias: categorias,
        pack: pack,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
};

module.exports = controller;

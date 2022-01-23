const { getPackagesByName } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    try {
      const querySearch = req.query.onde;
      const queryUp = querySearch.toUpperCase();
      if (!querySearch == '') {
        const pack = await getPackagesByName(querySearch);
        if (pack == '') {
          const imagem = './assets/img/busca.png';
          return res.status(200).json({
            title: '| Pesquisa',
            queryUp,
            imagem,
          });
        } else {
          return res.status(200).json({
            title: '| Pesquisa',
            pack,
            queryUp,
          });
        }
      } else {
        return res.status(200).json({
          Mensagem: 'Campo não preenchido',
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor', error });
    }
  },
};

module.exports = controller;

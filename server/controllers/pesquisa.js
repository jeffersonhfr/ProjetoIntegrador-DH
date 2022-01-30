const { getPackagesByName } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    try {
      const querySearch = req.query.onde;
      if (!querySearch == '') {
        const pacotes = await getPackagesByName(querySearch);
        if (pacotes == '') {
          const imagem = './assets/img/busca.png';
          return res.status(200).json({
            title: '| Pesquisa',
            pacotes,
          });
        } else {
          return res.status(200).json({
            title: '| Pesquisa',
            pacotes,
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

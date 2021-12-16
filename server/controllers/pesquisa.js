const { getPackagesByName } = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {
    const querySearch = req.query.onde;
    const queryUp = querySearch.toUpperCase();
    if (!querySearch == '') {
      const pack = await getPackagesByName(querySearch);
      if (pack == '') {
        res.render('pesquisa', {
          title: '| Pesquisa',
          pack,
          queryUp,
          imagem: './assets/img/busca.png',
          usuarioLogado: req.cookies.usuario,
          usuarioAdmin: req.cookies.admin,
          usuarioAvatar: req.cookies.avatar,
        });
      } else {
        res.render('pesquisa', {
          title: '| Pesquisa',
          pack,
          queryUp,
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
      }
    } else {
      res.redirect('../../pacotes');
    }
  },
};

module.exports = controller;

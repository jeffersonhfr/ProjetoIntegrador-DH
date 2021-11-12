const controller = {
  index: (req, res, next) => {
    res.render('historico', {
      title: '| Histórico de Viagens',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  details: (req, res, next) => {
    res.render('historico-detalhes', {
      title: '| Histórico de Viagens',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
};

module.exports = controller;

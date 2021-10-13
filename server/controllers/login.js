 
  const controller = {
  index: (req, res, next) => {
    res.render('login', {
      title: '| Login',
      titulo:'Teste',
      subtitulo:'Teste',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
  auth: (req, res, next) => {
    res.redirect('../../')
  }
};

module.exports = controller;
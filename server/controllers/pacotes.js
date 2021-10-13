const controller = {
  index: (req, res, next) => {
    res.render('pacotes', {
      title: '| Pacotes',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
  show:(req,res,next)=>{
    res.render('pacote',{
      title: '| Pacote',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
};

module.exports = controller;
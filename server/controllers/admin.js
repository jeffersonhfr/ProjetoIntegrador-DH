const pacotes = require('../data/pacotes.json');

const controller = {
    index: (req, res, next) => {
      res.render('pacotes', {
        title: '| Pacotes',
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      });
    },
    pacotes:(req,res,next)=>{
      res.render('admin',{
        title: '| admin',
        pacotes: pacotes,
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      })
    },
  };
  
  module.exports = controller;
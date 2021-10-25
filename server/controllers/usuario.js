const usuarios = require('../data/usuariosPlaceholder.json')
  
const controller = {
  index: (req, res, next) => {
    res.render('usuario', {
        title: '|' + req.cookies.usuario.nome,
        usuario: usuarios.find(u => {
            if (u.id === req.cookies.usuario.id) {
               return u
           }
        }),
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
    });
    }

};

module.exports = controller;
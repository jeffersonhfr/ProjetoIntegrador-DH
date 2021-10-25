const usuarios = require('../data/usuariosPlaceholder.json')

const controller = {
    index: (req, res, next) => {
        let usuarioLogado = req.cookies.usuario;
        let usuarioAdmin = req.cookies.admin;
        if (usuarioAdmin || usuarioLogado) {
            res.render('usuario', {
                title: '|' + usuarioLogado.nome,
                usuario: usuarios.find(u => {
                    if (u.id === usuarioLogado.id) {
                        return u
                    }
                }),
                usuarioLogado: usuarioLogado,
                usuarioAdmin: usuarioAdmin

            });
        } else {
            res.redirect('../login')
        }   
    },
    edit: (req, res, next) => {
        let usuarioLogado = req.cookies.usuario;
        let usuarioAdmin = req.cookies.admin;
        if (usuarioAdmin || usuarioLogado) {
            res.render('usuario-edit', {
                title: '|' + usuarioLogado.nome,
                usuario: usuarios.find(u => {
                    if (u.id === usuarioLogado.id) {
                        return u
                    }
                }),
                usuarioLogado: usuarioLogado,
                usuarioAdmin: usuarioAdmin

            });
        } else {
            res.redirect('../login')
        }   
    }


};

module.exports = controller;
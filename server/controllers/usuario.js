const usuarios = require("../data/usuariosPlaceholder.json");
const fs = require("fs"),
  path = require("path"),
  bcrypt = require("bcrypt");
const controller = {
  index: (req, res, next) => {
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    if (usuarioAdmin || usuarioLogado) {
      res.render("usuario", {
        title: "|" + usuarioLogado.nome,
        usuario: usuarios.find((u) => {
          if (u.id === usuarioLogado.id) {
            return u;
          }
        }),
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
      });
    } else {
      res.redirect("../login");
    }
  },
  edit: (req, res, next) => {
    let usuarioLogado = req.cookies.usuario;
    let usuario = usuarios.find((u) => {
      if (u.id === usuarioLogado.id) {
        return u;
      }
    });

    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.nascimento = req.body.nascimento;
    usuario.telefone = req.body.telefone;
    usuario.cpf = req.body.cpf;
    usuario.cep = req.body.cep;
    usuario.endereco = req.body.endereco;
    usuario.complemento = req.body.complemento;
    usuario.cidade = req.body.cidade;
    usuario.estado = req.body.uf;
    usuario.senha = bcrypt.hashSync(req.body.senha, 10);
    usuario.modificadoEm = new Date();
    usuarios.push(usuario);

    res.redirect("../perfil");
  },
  form_edit: (req, res, next) => {
    let usuarioLogado = req.cookies.usuario;
    let usuarioAdmin = req.cookies.admin;
    if (usuarioAdmin || usuarioLogado) {
      res.render("usuario-edit", {
        title: "|" + usuarioLogado.nome,
        usuario: usuarios.find((u) => {
          if (u.id === usuarioLogado.id) {
            return u;
          }
        }),
        usuarioLogado: usuarioLogado,
        usuarioAdmin: usuarioAdmin,
      });
    } else {
      res.redirect("../login");
    }
  },
};

module.exports = controller;

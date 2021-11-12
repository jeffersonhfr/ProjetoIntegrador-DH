const fs = require('fs'),
  path = require('path'),
  bcrypt = require('bcrypt');

const controller = {
  index: (req, res, next) => {
    res.render('cadastro', {
      title: '| Cadastre-se',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
      usuarioAvatar: req.cookies.avatar,
    });
  },
  cadastro: (req, res, next) => {
    res.render('cadastro', {
      title: '| Cadastre-se',
      titulo: 'Teste',
      subtitulo: 'Teste',
      usuarioAvatar: req.cookies.avatar,
    });
  },
  add: (req, res, next) => {
    const usuarios = fs.readFileSync(
      path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'),
      'utf-8',
    );
    let usuariosNew = JSON.parse(usuarios);
    let newUsuario = req.body;
    let senhaC = bcrypt.hashSync(newUsuario.senha, 10);
    newUsuario.senha = senhaC;
    let newId = usuariosNew[usuariosNew.length - 1].id + 1;
    newUsuario.criadoEm = new Date();
    newUsuario.modificadoEm = new Date();
    newUsuario.admin = false;
    newUsuario.avatar = '/assets/img/user.png';
    newUsuario.id = newId;
    usuariosNew.push(newUsuario);
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'),
      JSON.stringify(usuariosNew),
    );
    res.redirect('../../login');
  },
};

module.exports = controller;

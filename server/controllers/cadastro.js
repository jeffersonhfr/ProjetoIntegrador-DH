const fs = require('fs'),
  path = require('path')
  
const controller = {
  index: (req, res, next) => {
    res.render('cadastro', {
      title: '| Cadastre-se',
    });
  },
  cadastro: (req, res, next) => {
    res.render('cadastro', {
      title: '| Cadastre-se',
      titulo:'Teste',
      subtitulo:'Teste'
    });
  },
  add: (req, res, next) => {
    const usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'), 'utf-8')
    let usuariosNew = JSON.parse(usuarios)
    let newUsuario = req.body
    let newId = usuariosNew[usuariosNew.length - 1].id + 1
    newUsuario.criadoEm = new Date()
    newUsuario.modificadoEm = new Date()
    newUsuario.admin = false
    newUsuario.id = newId
    usuariosNew.push(newUsuario)
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'), JSON.stringify(usuariosNew))
    res.redirect('../../')
  }
};

module.exports = controller;
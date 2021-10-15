const admin = async (req, res, next) => {

  let isAdmin = req.cookies.admin
  if (!isAdmin || isAdmin == 'false') {
    res.render('login', {
      title: '| Login',
      erro: 'Ops! Você não tem permissões para ver essa tela...',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
    return
  }

  next()
  
  return
}

module.exports = admin
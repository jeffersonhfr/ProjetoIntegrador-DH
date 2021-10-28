const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')
const bcrypt = require('bcrypt')

const auth = async (req, res, next) => {
  // LIMPEZA DE COOKIES
  res.clearCookie('usuario')
  res.clearCookie('admin')

  // CAPTURA DO EMAIL E SENHA ENVIADOS
  const { email, senha } = await req.body

  // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
  const usuarioLogado = usuariosPlaceholder.filter(usuario => {
    if (usuario.email === email) {
      if (bcrypt.compareSync (senha, usuario.senha)) {
        return usuario
      }
    }
  })
  
  // CASO NÃO ENCONTREMOS UM USUÁRIO COM ESSES DADOS
  if (!usuarioLogado.length) {
    res.render('login', {
      title: '| Login',
      erro: 'Usuário ou senha inválida!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
  
  // FILTRAMOS ALGUNS CAMPOS COM O JSON.STRINGIFY (COMO A SENHA)
  let usuario = JSON.parse(JSON.stringify(usuarioLogado[0], ['id', 'nome', 'email', 'admin']))

  // DEFINIMOS OS COOKIES USUÁRIO (OBJETO) E ADMIN (BOOLEANO)
  res.cookie('usuario', usuario)
  res.cookie('admin', `${usuarioLogado[0].admin}`)

  // CONTINUA PARA A PRÓXIMA ETAPA
  next()

  return
}

module.exports = auth
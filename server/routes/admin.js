const express = require('express'),
  router = express.Router()
  // usersController = require('../controllers/users'),
  // acessoController = require('../controllers/acesso'),
  // adminMiddleware = require('../middlewares/admin')

// ROTAS ADMINISTRATIVAS (REQUEREM QUE O USUÁRIO AUTENTICADO SEJA ADMIN)
// router.get('/usuarios', adminMiddleware, usersController.list) // Tabela de usuários
// router.get('/usuarios/:id/editar', adminMiddleware, acessoController.update) // Dados do usuário para edição

module.exports = router

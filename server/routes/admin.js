const express = require('express'),
  router = express.Router()
   //usersController = require('../controllers/users'),
   admin = require('../controllers/admin'),
   adminMiddleware = require('../middlewares/admin')

// ROTAS ADMINISTRATIVAS (REQUEREM QUE O USUÁRIO AUTENTICADO SEJA ADMIN)
 router.get('/pacotes', adminMiddleware, admin.pacotes) 
 //router.get('/pacotes/:id/editar', adminMiddleware, acessoController.update) 
module.exports = router

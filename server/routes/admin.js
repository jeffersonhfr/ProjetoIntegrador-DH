const express = require('express');
const  router = express.Router()
const  adminMiddleware = require('../middlewares/admin');
const  ajudaController = require('../controllers/ajuda');
// const  sobreController = require('../controllers/sobre');
// const  pacotesController = require('../controllers/pacotes');

//ROTAS ADMINISTRATIVAS (REQUEREM QUE O USUÁRIO AUTENTICADO SEJA ADMIN)
router.get('/ajuda', adminMiddleware, ajudaController.list);

module.exports = router

var express = require('express');
var router = express.Router();
var historicoContoller = require('../controllers/historico');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', historicoContoller.index);
router.get('/todos-pedidos', adminMiddleware, historicoContoller.todos);
router.post('/:id/editar', historicoContoller.update);
router.get('/:id/', historicoContoller.details);

module.exports = router;

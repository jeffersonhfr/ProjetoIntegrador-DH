var express = require('express');
var router = express.Router();
var listarAdicionaisController = require('../controllers/adicionais');
const adminMiddleware = require('../middlewares/admin');


router.get('/',adminMiddleware, listarAdicionaisController.index);

router.post('/adicionar',adminMiddleware,  listarAdicionaisController.create);

router.put('/:id/editar',adminMiddleware,  listarAdicionaisController.update);

router.delete('/:id',adminMiddleware,  listarAdicionaisController.destroy);

module.exports = router;

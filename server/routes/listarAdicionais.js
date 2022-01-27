var express = require('express');
var router = express.Router();
var listarAdicionaisController = require('../controllers/adicionais');
const adminMiddleware = require('../middlewares/admin');


router.get('/', listarAdicionaisController.index);

router.post('/adicionar',  listarAdicionaisController.create);

router.put('/:id/editar',  listarAdicionaisController.update);

router.delete('/:id',  listarAdicionaisController.destroy);

module.exports = router;

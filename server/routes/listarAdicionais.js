var express = require('express');
var router = express.Router();
var listarAdicionaisController = require('../controllers/adicionais');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', listarAdicionaisController.index);

router.get('/adicionar', adminMiddleware, listarAdicionaisController.add);
router.post('/adicionar', adminMiddleware, listarAdicionaisController.create);

router.get('/:id/editar', adminMiddleware, listarAdicionaisController.edit);
router.post('/:id/editar', adminMiddleware, listarAdicionaisController.update);

router.post('/:id/delete', adminMiddleware, listarAdicionaisController.destroy);

module.exports = router;

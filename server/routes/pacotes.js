var express = require('express');
var router = express.Router();
var pacotesContoller = require('../controllers/pacotes');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', pacotesContoller.index);
router.get('/adicionar', adminMiddleware, pacotesContoller.add);
router.get('/:id', pacotesContoller.show);
router.get('/:id/editar', adminMiddleware, pacotesContoller.edit);
router.get('/:id/delete', adminMiddleware, pacotesContoller.delete);
module.exports = router;

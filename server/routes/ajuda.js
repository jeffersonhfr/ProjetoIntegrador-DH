var express = require('express');
var router = express.Router();
var ajudaContoller = require('../controllers/ajuda');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', ajudaContoller.index);
router.get('/editar', adminMiddleware, ajudaContoller.list);
router.post('/editar', adminMiddleware, ajudaContoller.update);
module.exports = router;

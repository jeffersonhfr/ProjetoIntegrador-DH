var express = require('express');
var router = express.Router();
var sobreController = require('../controllers/sobre');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', sobreController.index);
router.get('/editar', adminMiddleware, sobreController.list);
router.post('/editar', adminMiddleware, sobreController.update);

module.exports = router;

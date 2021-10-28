var express = require('express');
var router = express.Router();
var sobreController = require('../controllers/sobre')
const  adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', sobreController.index);
router.get('/edit', adminMiddleware, sobreController.list);
router.post('/edit', adminMiddleware, sobreController.update);

module.exports = router;

var express = require('express');
var router = express.Router();
var pacotesContoller = require('../controllers/pacotes');
const adminMiddleware = require('../middlewares/admin');

/* GET home page. */
router.get('/', pacotesContoller.index);
router.get('/:id', pacotesContoller.show);
module.exports = router;

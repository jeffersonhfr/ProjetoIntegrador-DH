var express = require('express');
var router = express.Router();
var checkoutContoller = require('../controllers/checkout');

/* GET home page. */
router.get('/', checkoutContoller.index);
router.get('/sucesso', checkoutContoller.sucesso);

module.exports = router;

var express = require('express');
var router = express.Router();
var checkoutContoller = require('../controllers/checkout');

/* GET home page. */
router.post('/', checkoutContoller.index);
router.post('/sucesso', checkoutContoller.sucesso);
router.get('/sucesso', checkoutContoller.sucesso);

module.exports = router;

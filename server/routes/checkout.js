var express = require('express');
var router = express.Router();
var checkoutContoller = require('../controllers/checkout');
const loginMiddleware = require('../middlewares/login');

/* GET home page. */
router.post('/', checkoutContoller.index);
// router.post('/', loginMiddleware, checkoutContoller.index);

router.post('/sucesso', checkoutContoller.sucesso);
// router.post('/sucesso', loginMiddleware, checkoutContoller.sucesso);

module.exports = router;

var express = require('express');
var router = express.Router();
var loginContoller = require('../controllers/login');
const authMiddleware = require('../middlewares/auth');
const redirecionar = require('../middlewares/redirect');

// ROTAS DE LOGIN

router.post('/', loginContoller.login); 

module.exports = router;

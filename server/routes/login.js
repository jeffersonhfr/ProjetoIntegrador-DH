var express = require('express');
var router = express.Router();
var loginContoller = require('../controllers/login');
const authMiddleware = require('../middlewares/auth');
const redirecionar = require('../middlewares/redirect');

// ROTAS DE LOGIN
router.get('/', loginContoller.index);
router.post('/', authMiddleware, redirecionar, loginContoller.auth); // Execução de login

module.exports = router;

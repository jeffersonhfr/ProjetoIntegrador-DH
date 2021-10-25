const express = require('express');
const router = express.Router()

const usuarioController = require('../controllers/usuario');
const  authMiddleware = require('../middlewares/auth');

router.get('/', usuarioController.index);


module.exports = router;
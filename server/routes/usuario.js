const express = require('express');
const router = express.Router()

const usuarioController = require('../controllers/usuario');
const  adminMiddleware = require('../middlewares/admin');

router.get('/',adminMiddleware, usuarioController.index);

module.exports = router;
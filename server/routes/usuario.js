const express = require('express');
const router = express.Router()

const usuarioController = require('../controllers/usuario');


router.get('/', usuarioController.index);

module.exports = router;
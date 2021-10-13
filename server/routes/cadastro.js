var express = require('express');
var router = express.Router();
var cadastroContoller = require('../controllers/cadastro')

/* GET home page. */
router.get('/', cadastroContoller.index);
router.get('/', cadastroContoller.cadastro); // Exibe rota cadastro
router.post('/', cadastroContoller.add) // Execução de cadastro

module.exports = router;

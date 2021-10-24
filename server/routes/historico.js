var express = require('express');
var router = express.Router();
var historicoContoller = require('../controllers/historico')

/* GET home page. */
router.get('/', historicoContoller.index);
// router.get('/', historicoContoller.cadastro); // Exibe rota cadastro
// router.post('/', historicoContoller.add) // Execução de cadastro

module.exports = router;

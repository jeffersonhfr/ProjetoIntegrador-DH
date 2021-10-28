var express = require('express');
var router = express.Router();
var pesquisaController = require('../controllers/pesquisa');

/* GET home page. */
router.get('/', pesquisaController.index);
module.exports = router;

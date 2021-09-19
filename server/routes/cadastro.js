var express = require('express');
var router = express.Router();
var cadastroContoller = require('../controllers/cadastro')

/* GET home page. */
router.get('/', cadastroContoller.index);

module.exports = router;

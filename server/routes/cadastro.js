var express = require('express');
var router = express.Router();
var cadastroContoller = require('../controllers/cadastro');


router.post('/', cadastroContoller.add);

module.exports = router;

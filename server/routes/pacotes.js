var express = require('express');
var router = express.Router();
var pacotesContoller = require('../controllers/pacotes')

/* GET home page. */
router.get('/', pacotesContoller.index);

module.exports = router;

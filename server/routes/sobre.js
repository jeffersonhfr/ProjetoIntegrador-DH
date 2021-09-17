var express = require('express');
var router = express.Router();
var sobreContoller = require('../controllers/sobre')

/* GET home page. */
router.get('/', sobreContoller.index);

module.exports = router;

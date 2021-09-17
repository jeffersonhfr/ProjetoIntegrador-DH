var express = require('express');
var router = express.Router();
var indexContoller = require('../controllers/index')

/* GET home page. */
router.get('/', indexContoller.index);

module.exports = router;

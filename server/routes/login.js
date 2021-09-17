var express = require('express');
var router = express.Router();
var loginContoller = require('../controllers/login')

/* GET home page. */
router.get('/', loginContoller.index);

module.exports = router;

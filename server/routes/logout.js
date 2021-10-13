var express = require('express');
var router = express.Router();
var logoutContoller = require('../controllers/logout')

/* GET home page. */
router.get('/', logoutContoller.logout);

module.exports = router;

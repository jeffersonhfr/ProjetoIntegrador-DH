var express = require('express');
var router = express.Router();
var indexContoller = require('../controllers/index');
const redirect = require('../middlewares/redirect');

/* GET home page. */
router.get('/', redirect, indexContoller.index);

module.exports = router;

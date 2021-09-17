var express = require('express');
var router = express.Router();
var ajudaContoller = require('../controllers/ajuda')

/* GET home page. */
router.get('/', ajudaContoller.index);

module.exports = router;

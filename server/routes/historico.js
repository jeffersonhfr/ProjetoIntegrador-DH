var express = require('express');
var router = express.Router();
var historicoContoller = require('../controllers/historico');

/* GET home page. */
router.get('/', historicoContoller.index);
// router.get('/todos', historicoContoller.index);
// router.post('/:id/editar', historicoContoller.update);
router.get('/:id/', historicoContoller.details);

module.exports = router;

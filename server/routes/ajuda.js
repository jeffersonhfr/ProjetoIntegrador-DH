var express = require('express');
var router = express.Router();
var ajudaContoller = require('../controllers/ajuda')
const  adminMiddleware = require('../middlewares/admin');


/* GET home page. */
router.get('/', ajudaContoller.index);
router.get('/edit', adminMiddleware, ajudaContoller.list);
router.post('/edit', adminMiddleware, ajudaContoller.update);
module.exports = router;

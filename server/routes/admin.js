const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middlewares/admin');
const ajudaController = require('../controllers/ajuda');
const sobreController = require('../controllers/sobre');
const pacotesController = require('../controllers/pacotes');
// const  pacotesController = require('../controllers/pacotes');

router.get('/pacotes', adminMiddleware, pacotesController.admin);

module.exports = router;

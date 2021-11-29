var express = require('express');
var router = express.Router();
var pacotesContoller = require('../controllers/pacotes');
const adminMiddleware = require('../middlewares/admin');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assets/img/upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});
const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', pacotesContoller.index);

router.get('/adicionar', adminMiddleware, pacotesContoller.add);
router.post(
  '/adicionar',
  adminMiddleware,
  upload.single('pacotes'),
  pacotesContoller.create,
);

router.get('/:id', pacotesContoller.show);

router.get('/:id/editar', adminMiddleware, pacotesContoller.edit);
router.post('/:id/editar', adminMiddleware, pacotesContoller.update);

router.get('/:id/delete', adminMiddleware, pacotesContoller.delete);
router.post('/:id/delete', adminMiddleware, pacotesContoller.destroy);
module.exports = router;

var express = require('express');
var router = express.Router();
var listarCategoriaController = require('../controllers/categorias');
const adminMiddleware = require('../middlewares/admin');
// const uploadCategory = require('../middlewares/uploadCategory');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assets/img/categoria');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', listarCategoriaController.index);

router.get('/adicionar', adminMiddleware, listarCategoriaController.add);
router.post(
  '/adicionar',
  adminMiddleware,
  upload.single('imgCategoria'),
  listarCategoriaController.create,
);

router.get('/:id/editar', adminMiddleware, listarCategoriaController.edit);
router.post(
  '/:id/editar',
  adminMiddleware,
  upload.single('imgCategoria'),
  listarCategoriaController.update,
);

router.post('/:id/delete', adminMiddleware, listarCategoriaController.destroy);

module.exports = router;

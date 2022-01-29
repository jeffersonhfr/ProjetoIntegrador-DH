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

router.get('/', listarCategoriaController.index);
router.post(
  '/adicionar',
  adminMiddleware,
  upload.single('imgCategoria'),
  listarCategoriaController.create,
);

router.put(
  '/:id/editar',
  adminMiddleware,
  upload.single('imgCategoria'),
  listarCategoriaController.update,
);

router.delete(
  '/:id/delete',
  adminMiddleware,
  listarCategoriaController.destroy,
);

module.exports = router;

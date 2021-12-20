var express = require('express');
var router = express.Router();
var listarUsuariosContoller = require('../controllers/listarUsuarios');
const adminMiddleware = require('../middlewares/admin');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assets/img/avatar');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', listarUsuariosContoller.index);

router.get('/:id', listarUsuariosContoller.show);

router.get('/:id/editar', adminMiddleware, listarUsuariosContoller.form_edit);
router.post(
  '/:id/editar',
  adminMiddleware,
  upload.single('usuarioAvatar'),
  listarUsuariosContoller.edit,
);

// Dados do usuário para edição

router.get('/:id/delete', adminMiddleware, listarUsuariosContoller.delete);
router.post('/:id/delete', adminMiddleware, listarUsuariosContoller.destroy);

module.exports = router;

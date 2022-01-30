const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');
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

router.get('/', usuarioController.index);
router.get('/edit', usuarioController.form_edit);
router.put('/edit', upload.single('usuarioAvatar'), usuarioController.edit);

// console.log(storage.filename);

module.exports = router;

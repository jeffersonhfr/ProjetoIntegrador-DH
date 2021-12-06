var express = require('express');
var router = express.Router();
var pacotesContoller = require('../controllers/pacotes');
const adminMiddleware = require('../middlewares/admin');

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/assets/img/upload');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg');
//   },
// });
// const upload = multer({ storage: storage });

// const cpUpload = upload.fields([
//   {
//     name: 'capa',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem01',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem02',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem03',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem04',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem05',
//     maxCount: 1,
//   },
//   {
//     name: 'imagem06',
//     maxCount: 1,
//   },
// ]);

const uploadImage = require('../middlewares/uploadImage');

/* GET home page. */
router.get('/', pacotesContoller.index);

router.get('/adicionar', adminMiddleware, pacotesContoller.add);
// router.post('/adicionar', adminMiddleware, cpUpload, pacotesContoller.create);
router.post(
  '/adicionar',
  adminMiddleware,
  uploadImage.array('imagem'),
  pacotesContoller.create,
);

router.get('/:id', pacotesContoller.show);

router.get('/:id/editar', adminMiddleware, pacotesContoller.edit);
// router.post('/:id/editar', adminMiddleware, cpUpload, pacotesContoller.update);
router.post(
  '/:id/editar',
  adminMiddleware,
  uploadImage.array('imagem'),
  pacotesContoller.update,
);

router.get('/:id/delete', adminMiddleware, pacotesContoller.delete);
router.post('/:id/delete', adminMiddleware, pacotesContoller.destroy);
module.exports = router;

const uploadCategory = () => {
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

  return upload.single('imgCategoria');
};

module.exports = uploadCategory;

const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './public/assets/img/package')
        },
        filename: (req, file, callBack) => {
            callBack(null, Date.now().toString() + '_' + file.originalname)
        },
        fileFilter: (req, file, callBack) => {
            const accImg = ['image/png', 'image/jpg', 'image/jpeg'].find(accForm => accForm == file.mimetype);

            if (accImg) {
                return cb(null, true);
            }
            return cb(null,false)
            
        }
    })
}))
var express = require("express");
var router = express.Router();
var visualizarUsuarioContoller = require("../controllers/visualizarUsuario");
const adminMiddleware = require("../middlewares/admin");

/* GET home page. */
router.get("/:id", visualizarUsuarioContoller.index);
router.get("/:id/edit", visualizarUsuarioContoller.form_edit);
router.put("/:id/edit", visualizarUsuarioContoller.edit);

module.exports = router;

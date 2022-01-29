var express = require("express");
var router = express.Router();
var visualizarUsuarioContoller = require("../controllers/visualizarUsuario");
const loginMiddleware = require("../middlewares/login");



router.get("/:id",loginMiddleware, visualizarUsuarioContoller.index);

router.put("/:id/edit",loginMiddleware, visualizarUsuarioContoller.edit);

module.exports = router;

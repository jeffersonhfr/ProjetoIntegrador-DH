var express = require("express");
var router = express.Router();
var visualizarUsuarioContoller = require("../controllers/visualizarUsuario");
const adminMiddleware = require("../middlewares/admin");

/* GET home page. */
router.get("/:id", visualizarUsuarioContoller.index);

module.exports = router;

var express = require("express");
var router = express.Router();
var listarUsuariosContoller = require("../controllers/listarUsuarios");
const adminMiddleware = require("../middlewares/admin");

/* GET home page. */
router.get("/", listarUsuariosContoller.index);
module.exports = router;

var express = require("express");
var router = express.Router();
var listarUsuariosContoller = require("../controllers/listarUsuarios");
const adminMiddleware = require("../middlewares/admin");

/* GET home page. */
router.get("/", listarUsuariosContoller.index);

router.get("/:id", listarUsuariosContoller.show);

router.get(
  "/listarUsuarios/:id/editar",
  adminMiddleware,
  listarUsuariosContoller.edit
); // Dados do usuário para edição

module.exports = router;

var express = require("express");
var router = express.Router();
var listarUsuariosContoller = require("../controllers/listarUsuarios");
const adminMiddleware = require("../middlewares/admin");

/* GET home page. */
router.get("/", listarUsuariosContoller.index);

router.get("/:id", listarUsuariosContoller.show);

router.get("/:id/editar", adminMiddleware, listarUsuariosContoller.form_edit);
router.post("/:id/editar", adminMiddleware, listarUsuariosContoller.edit);

// Dados do usuário para edição

router.get("/:id/delete", adminMiddleware, listarUsuariosContoller.delete);
router.post("/:id/delete", adminMiddleware, listarUsuariosContoller.destroy);

module.exports = router;

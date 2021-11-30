const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuario");

router.get("/", usuarioController.index);

router.get("/edit", usuarioController.form_edit);
router.post("/edit", usuarioController.edit);

module.exports = router;

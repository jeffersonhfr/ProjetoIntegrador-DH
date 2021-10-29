var express = require("express");
var router = express.Router();
var recuperarSenhaContoller = require("../controllers/recuperarSenha");

// ROTAS DE LOGIN
router.get("/", recuperarSenhaContoller.index);

module.exports = router;

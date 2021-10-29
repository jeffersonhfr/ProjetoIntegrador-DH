const controller = {
  index: (req, res, next) => {
    res.render("recuperarSenha", {
      title: "| Recuperar Senha",
      erro: "",
    });
  },
};

module.exports = controller;

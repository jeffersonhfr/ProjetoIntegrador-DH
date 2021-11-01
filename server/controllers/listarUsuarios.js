const controller = {
  index: (req, res, next) => {
    res.render("listarUsuarios", {
      title: "| Listar Usuários",
      erro: "",
    });
  },
};

module.exports = controller;

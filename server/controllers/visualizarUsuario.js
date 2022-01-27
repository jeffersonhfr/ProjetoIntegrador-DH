const { getUserById } = require("../services/usuarios");

const controller = {
  index: async (req, res, next) => {
    try {
      // const id = 5;
      const { id } = req.params;
      const user = await getUserById(id);

      return res.status(200).json({
        title: "Usuário",
        subtitulo: `Usuário #${id}`,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro do servidor", error });
    }
  },
  edit: async (req, res, next) => {
    try {
      // const id = 5;
      const { id } = req.params;
      const user = await getUserById(id);

      return res.status(200).json({
        title: "Usuário",
        subtitulo: `Usuário #${id}`,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro do servidor", error });
    }
  },
  form_edit: async (req, res, next) => {
    try {
      // const id = 5;
      let usuarioLogado = {};
      // usuarioLogado.nome = "Jefferson";
      // let usuarioAdmin = true;

      const { id } = req.params;
      // let usuarioLogado = req.cookies.usuario;
      // let usuarioAdmin = req.cookies.admin;
      const user = await getUserById(id);

      if (usuarioAdmin || usuarioLogado) {
        return res.status(200).json({
          title: "| " + usuarioLogado.nome,
          user,
        });
      } else {
        return res.status(500).json({ message: "Erro ao enviar o formulário" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro do servidor", error });
    }
  },
};

module.exports = controller;

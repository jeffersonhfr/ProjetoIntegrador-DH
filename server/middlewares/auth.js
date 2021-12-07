const usuariosPlaceholder = require("../data/usuariosPlaceholder.json");
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../services/usuarios");

const auth = async (req, res, next) => {
  try {
    // LIMPEZA DE COOKIES
    res.clearCookie("usuario");
    res.clearCookie("admin");

    // CAPTURA DO EMAIL E SENHA ENVIADOS
    const { email, senha } = await req.body;

    // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
    const user = await getUserByEmail(email);
    console.log(user);
    if (!user) {
      throw Error("Usuario nao encontrado!");
    }
    if (!bcrypt.compareSync(senha, user.senha)) {
      throw Error("Senha invalida!");
    }

    let usuario = user;

    // DEFINIMOS OS COOKIES USUÁRIO (OBJETO) E ADMIN (BOOLEANO)
    res.cookie("usuario", usuario);
    res.cookie("admin", `${user.admin}`);
    res.cookie("avatar", `${user.avatar}`);

    // CONTINUA PARA A PRÓXIMA ETAPA
    next();

    return;
  } catch (error) {
    console.log(error);
    res.render("login", {
      title: "| Login",
      erro: "Usuário ou senha inválida!",
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    });
  }
};

module.exports = auth;

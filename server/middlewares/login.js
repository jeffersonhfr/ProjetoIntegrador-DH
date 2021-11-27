const login = async (req, res, next) => {
  let { origem } = req.body;
  console.log(origem);
  let isLogin = req.cookies.usuario;
  if (!isLogin) {
    res.render('login', {
      title: '| Login',
      erro: 'Ops! Você não está logado...',
      origem,
    });
    return;
  }

  next();

  return;
};

module.exports = login;

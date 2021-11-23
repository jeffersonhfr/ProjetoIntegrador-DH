const login = async (req, res, next) => {
  let {} = req.body;
  let isLogin = req.cookies.usuario;
  if (!isLogin) {
    res.render('login', {
      title: '| Login',
      erro: 'Ops! Você não está logado...',
    });
    return;
  }

  next();

  return;
};

module.exports = login;

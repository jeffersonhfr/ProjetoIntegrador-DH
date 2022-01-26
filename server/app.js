const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const adminMiddleware = require('./middlewares/admin');
const indexRouter = require('./routes/index');
const pesquisaRouter = require('./routes/pesquisa');
const pacotesRouter = require('./routes/pacotes');
const sobreRouter = require('./routes/sobre');
const ajudaRouter = require('./routes/ajuda');
const listarUsuariosRouter = require('./routes/listarUsuarios');
const listarCategoriaRouter = require('./routes/listarCategoria');
const listarAdicionaisRouter = require('./routes/listarAdicionais');
const cadastroRouter = require('./routes/cadastro');
const historicoRouter = require('./routes/historico');
const checkoutRouter = require('./routes/checkout');
const perfilRouter = require('./routes/usuario');

// const loginRouter = require('./routes/login');
// const recuperarSenhaRouter = require('./routes/recuperarSenha');
// const logoutRouter = require('./routes/logout');

const cors = require('cors');

const visualizarUsuarioRouter = require('./routes/visualizarUsuario');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(__dirname + '/public/assets/style'));
app.use('/fonts', express.static(__dirname + '/public/assets/fonts'));
app.use('/img', express.static(__dirname + '/public/assets/img'));
app.use('/src', express.static(__dirname + '/public/src'));

app.use(cors());
app.use('/', indexRouter); //JSON
app.use('/pesquisa', pesquisaRouter); //JSON
app.use('/pacotes', pacotesRouter); //JSON
app.use('/sobre', sobreRouter); //JSON
app.use('/ajuda', ajudaRouter); //JSON
app.use('/cadastro', cadastroRouter); //JSON
app.use('/minhas-viagens', historicoRouter); //JSON
app.use('/checkout', checkoutRouter); //JSON
app.use('/perfil', perfilRouter); //JSON

// app.use('/login', loginRouter);
// app.use('/recuperarSenha', recuperarSenhaRouter);
// app.use('/logout', logoutRouter);

// A PARTIR DAQUI SOMENTE USUÁRIOS ADMNISTRADORES PODEM ACESSAR
app.use('/listarUsuarios', listarUsuariosRouter); //JSON
// app.use('/listarUsuarios', adminMiddleware, listarUsuariosRouter);

app.use('/listarCategoria', listarCategoriaRouter); //JSON
// app.use('/listarCategoria', adminMiddleware, listarCategoriaRouter);

app.use('/listarAdicional', listarAdicionaisRouter); //JSON
// app.use('/listarAdicional', adminMiddleware, listarAdicionaisRouter);

app.use('/visualizarUsuario', visualizarUsuarioRouter); //JSON
// app.use('/visualizarUsuario', adminMiddleware, visualizarUsuarioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).render('404', {
    title: '| Página não encontrada',
    usuarioLogado: req.cookies.usuario,
    usuarioAdmin: req.cookies.admin,
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

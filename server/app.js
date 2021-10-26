const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const adminMiddleware = require('./middlewares/admin');
const logoutRouter = require('./routes/logout');
const indexRouter = require('./routes/index');
const pacotesRouter = require('./routes/pacotes');
const sobreRouter = require('./routes/sobre');
const ajudaRouter = require('./routes/ajuda');
const loginRouter = require('./routes/login');
const cadastroRouter = require('./routes/cadastro');
const historicoRouter = require('./routes/historico');
const adminRouter = require('./routes/admin');
const usuarioRouter = require('./routes/usuario');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style',express.static(__dirname + '/public/assets/style'));
app.use('/fonts', express.static(__dirname + '/public/assets/fonts'));
app.use('/img', express.static(__dirname + '/public/assets/img'));
app.use('/src', express.static(__dirname + '/public/src'));


app.use('/', indexRouter);
app.use('/logout', logoutRouter);
app.use('/pacotes', pacotesRouter);
app.use('/sobre', sobreRouter);
app.use('/ajuda', ajudaRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);
app.use('/perfil',usuarioRouter)
app.use('/historico', historicoRouter);

// A PARTIR DAQUI SOMENTE USUÁRIOS ADMNISTRADORES PODEM ACESSAR
app.use(adminMiddleware)

// ROTAS ADMINISTRATIVAS
app.use('/admin', adminRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
 res.status(404).render('404', {
  title: '| Página não encontrada',
  usuarioLogado: req.cookies.usuario,
  usuarioAdmin: req.cookies.admin
})
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

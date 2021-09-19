var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pacotesRouter = require('./routes/pacotes');
var sobreRouter = require('./routes/sobre');
var ajudaRouter = require('./routes/ajuda');
var loginRouter = require('./routes/login');
var cadastroRouter = require('./routes/cadastro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
app.use('/pacotes', pacotesRouter);
app.use('/sobre', sobreRouter);
app.use('/ajuda', ajudaRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

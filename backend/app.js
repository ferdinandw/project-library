var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const libraryRouter = require('./routes/Library')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
mongodConnect = process.env.MONGO_URI
mongoose.connect(mongodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/library', libraryRouter)

module.exports = app;

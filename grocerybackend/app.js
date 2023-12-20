var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors =require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var demoRouter = require('./routes/demo')
var contactRouter = require('./routes/contact')
const { error } = require('console');

var app = express();
var app = express();

app.options("*", cors());
app.use(cors({
  origin:"http://localhost:3000"
}))

//DataBase conection
mongoose.connect("mongodb+srv://shruti:4PA334b7brzg5crV@cluster0.ncgglgm.mongodb.net/grocery").then(() => {
    console.log("database connected");
}).catch((error) => {
    console.log("database connection error",error);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', demoRouter);
app.use('/contact', contactRouter);

app.use(express.static('public'));
app.use('/images', express.static('images'));
module.exports = app;

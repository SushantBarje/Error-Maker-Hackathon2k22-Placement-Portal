require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var con = require('./database/connection');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/client'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

app.get("/tpo_dashboard", (req, res) => {
  res.sendFile(__dirname + "/client/TPO/adminHeader.html");
});

app.get("/adminHeader", (req, res) => {
  res.sendFile(__dirname + "/client/student_dashboard/adminHeader.html");
});


var userRouter = require('./routes/user');
var tpoRouter = require('./routes/tpo');
var studentRouter = require('./routes/student');

app.use('/api/users/login', userRouter);
app.use('/api/tpo', tpoRouter);
app.use('/api/student', studentRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

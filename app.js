var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var fileUploadRouter = require('./routes/fileUpload');
var userRouter = require('./routes/user');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/getFileUploadUrl", fileUploadRouter);
app.use("/user", userRouter);
app.get('/test', (req, res) => {
    res.json({ message: "This is a test route" });
});

module.exports = app;

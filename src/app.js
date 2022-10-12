var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index')

var app = express();
var port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


// TODO Database

// routes
app.use('/', indexRouter);
// user routes
app.use('/users', require('./routes/user/users')) 


// TODO error


// listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;
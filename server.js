var express = require ('express');

var opp = require('../routers/opp');
var newRouter = require('../routers/newRouter');

var app = express();

app.use('/', opp);
app.use('/', newRouter);

app.listen(9000, function () {
	console.log('oop listening on port 9000');
};

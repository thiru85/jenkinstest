var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world, This is developed by Thirumalai Aiyalu as a Jenkins Demo - edited 1 time');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var logger = require('morgan');

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/swatter');

var PostSchema = new Schema({
    title: { type: String, required: true },
    tagline: { type: String },
    author: { type: String }
});

var PostModel = mongoose.model('post', PostSchema);

var app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
 });    

app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(logger('dev'));

restify.serve(app, PostModel);

app.listen(8081, function() {
    console.log('listening on port 8081');
});
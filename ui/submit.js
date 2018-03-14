var express = require('express');
var http =require('http');
var bodyParser= require('bodt_parser');
var app = express();
var urlencodedParser = bodyParser.urlencoced({ extended: true});
 app.post('/ui/server.js', urlencodedParser, function(req,res){
    res.send("You entered the following data");
     
 });
var express = require('express');
var app = express();

//this is the same as
//var app = require('express')();

//app, get the url ('/'), then call function to load page

app.use(function(req,res,next){
    console.log('request to '+req.url);
    next();
});

app.get('/',function(req,res){
    res.send('<h1>hello world<h1>');
});

app.get('/profile/:name',function(req, res){
    res.status(200);
    res.type('json');
    res.send({
    name: req.params.name
    });
});

//piece of middleware
//before we end our request, make sure we see if there is anything in our public directory and to serve that
app.use(express.static(__dirname + '/public'));

// '*' any unknown url will lead to 404 error

app.use(function(req,res,next){
    res.status(404);
    res.send('404 - not found');
});

app.listen(3001);

console.log("Listening on port 3001");


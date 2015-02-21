var express = require('express');
var director = require('director');
var ejs = require('ejs');
var http = require('http');

var notFound = function(err, req, res, next) {
  return res.render('users', {
    title: "Error not found",
    header: "Not Found"
  });
};

var app = express();

var hello = function () {
  this.res.send(200, 'Hello World!');
};

var saySomething = function(something) {
  this.res.send(200, 'Saying ' + something);
};

var testing = function() {
  console.log(this.req.query);
  this.res.render('main', {
    title: "Author index",
    header: "Some users"
  });
};
var getAllBooks = function() {
  this.res.render('users', {
    title: "Books",
    header: "Books",
    users: [{name: 'a', email: '10$'},{name: 'a', email: '10$'},{name: 'a', email: '10$'}]
  });
};

var bookById = function(id) {
  this.res.render('book', {
    title: "book id: " + id,
    header: "Book id"
  });
};

var getAuthor = function() {
  this.res.render('book', {
    title: "Doron Segal and co.",
    header: "Author Page"
  });
};

var router = new director.http.Router({
  '/': {
    get: hello
  },
  '/say/:something': {
    get: saySomething
  },
  '/test': {
    get: testing
  },
  '/books': {
    get: getAllBooks
  },
  '/books/view/:bookId': {
    get: bookById
  },
  '/author': {
    get: getAuthor
  }
});

var middleware = function (req, res, next) {
  router.dispatch(req, res, function (err) {
    if (err == undefined || err) next();
  });
};

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(middleware);


app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
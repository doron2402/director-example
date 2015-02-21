var books = {};

books.index = function(req, res) {
  return res.render('main', {
    title: "books index",
    header: "Some users"
  });
};

books.single = function(req, res) {
  return res.render('main', {
    title: "books single",
    header: "Some users"
  });
};
module.exports = books;
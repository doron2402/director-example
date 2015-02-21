var author = {};

author.index = function(req, res) {
  return res.render('main', {
    title: "Author index",
    header: "Some users"
  });
};

module.exports = author;
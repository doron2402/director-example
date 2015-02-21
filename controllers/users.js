// Dummy users
var db = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

var users = {};

users.index = function(req, res) {
  return res.render('users', {
    users: db,
    title: "EJS example",
    header: "Some users"
  });
};

module.exports = users;
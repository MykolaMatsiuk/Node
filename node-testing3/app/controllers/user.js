var User = require('../models/User');

exports.register = function (req, res) {
  res.render('register', {
    title: 'leaving post page'
  });
};


exports.signup = function (req, res, next) {

  var user = new User ({
    name: req.body.name,
    age: req.body.age,
    date: new Date(),
    email: req.body.email,
    blog: req.body.blog
  });
  user.save(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect('/blogs');
};

exports.blogs = function (req, res) {
  User.find(function (err, users) {
    console.log(users.date)
    res.render('blogs', {
      title: "Posts",
      users: users
    })
  })
};

exports.blog = function (req, res) {
  var { id } = req.params;
  User.findById(id, function (err, user) {
    res.render('blog', {
      user: user
    })
  });
}

exports.deleteBlog = function (req, res, next) {
  User.remove({ _id: req.params.id }, function (err) {
    if (err) { return next(err); };
    res.redirect('/blogs');
  });
}

exports.updateBlog = function (req, res, next) {
  User.findById({ _id: req.params.id }, function (err, user) {
    if (err) { return next(err); };
    user.blog = req.body.newBlog || '';
    user.save(function (err) {
      if (err) { return next(err); };
      res.redirect('/blogs');
    })
  })
}

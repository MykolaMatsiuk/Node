var express = require('express');
var app = express();


//connecting controllers
var userController = require('../controllers/user');
var homeController = require('../controllers/home');

//routes
app.get('/', homeController.index);
app.get('/register', userController.register);
app.post('/register', userController.signup);
app.get('/blogs', userController.blogs);
app.get('/blogs/:id', userController.blog);
app.post('/blogs/:id', userController.deleteBlog);
app.post('/blogs/:id/update', userController.updateBlog);

module.exports = app;

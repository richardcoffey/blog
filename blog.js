/**
 * @file blog.js
 * Main file that handles routing for this blog.
 */

//Creating the server on which my website runs.
const express = require('express');
const app = express();

//Applying CSS styling.
app.use(express.static('assets'));

//Adding template.
const templates = {
  main: require('./templates/main'),
};

//Adding all of the objects for the different webpages.
const views = {
  home: require('./views/home'),
  about: require('./views/about'),
  blog: require('./views/blog'),
  contact: require('./views/contact'),
  game: require('./views/games'),
};

//Importing the the webpage files, and displaying them on the webpage.
app.get('/home', (request, result) => {
  result.send(templates.main('Home', views.home));
});

app.get('/about', (request, result) => {
  result.send(templates.main('About', views.about));
});

app.get('/contact', (request, result) => {
  result.send(templates.main('Contacts', views.contact));
});

app.get('/blog', (request, result) => {
  result.send(templates.main('Blog', views.blog));
});

app.get('/games', (request, result) => {
  result.send(templates.main('Games', views.game));
});

//Setting the port.
app.listen(1200);
/**
 * @file blog.js
 * Main file that handles routing for this blog.
 */

// Require dependencies.
const express = require('express');

// Load templates and views.
const templates = {
  main: require('./templates/main'),
};
const views = {
  home: require('./views/home'),
  blog: require('./views/blog'),
}

// Create express app.
const app = express();

// Configure Express static files.
app.use(express.static('assets'));

// Set details for this website.
app.locals.title = 'Richard Coffey';
app.locals.email = 'richardcoffey32@gmail.com';

// Create home endpoint.
app.get('/', (request, result) => {
  result.send(templates.main('Home', views.home));
});

// Create blog endpoint.
app.get('/blog', (request, result) => {
  result.send(templates.main('Blog', views.blog));
});

app.listen(1200);
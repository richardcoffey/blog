/**
 * @file blog.js
 * Main file that handles routing for this blog.
 */

// Require dependencies.
const express = require('express');

// Create express app.
const app = express();

// Set details for this website.
app.locals.title = 'Richard Coffey';
app.locals.email = 'richardcoffey32@gmail.com';

// Create home endpoint.
app.get('/', (request, result) => {
  result.send('Hello World!');
});

app.listen(3000);

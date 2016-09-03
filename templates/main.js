/**
 * @file main.js
 * Crating some simple js as an excersize.
 */

//Creating the function that imports HTML to the blog.js file.
module.exports = (title, body) => {
  return `
<DOCTYPE! html>

<html>
  <title>Richard Coffey | ${title} </title>

  <head>
    <link rel="stylesheet" type="text/css" href="/styles/style.css">
  </head>

  <body>

    <section id="wrapper">

      <section id="header">
        <ul>
          <li><a class="home" href="/home">Home</a></li>
          <li><a class="blog" href="/blog">Blog</a></li>
          <li><a class="about" href="/about">About</a></li>
          <li><a class="contact" href="/contact">Contact</a></li>
        </ul>
          <h1>Richard Coffey</h1>
          <h3>Learning HTML, CSS, and nodejs!</h3>
      </section>

      <section id="social">
        <ul>

          <li class="facebook">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100009285609720">Facebook</a>
          </li>
          <li class="twitter">
            <a target="_blank" href="https://twitter.com/thearcman">Twitter</a>
          </li>
          <li class="ggl">
            <a target="_blank" href="https://plus.google.com/u/0/110558789864230541494/posts">Google Plus</a>
          </li>
        </ul>
      </section>

      <section id="summary">
        ${body}
      </section>

    </section>

  </body>

  </html>
   `;
};
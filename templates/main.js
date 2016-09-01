/**
 * @file home.js
 * Contains home JavaScript.
 */

/**
 * Returns main HTML for my app.
 * @param {String} title Title of page being rendered.
 * @param {String} body Body of page being rendered.
 * @returns {String} String of HTML that can be sent to browser.
 */
module.exports = (title, body) => {
  return `
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>

      <section id="wrapper">
        <section id="header">
          <h1>Richard Coffey</h1>
          <h3>Learning HTML, CSS, and nodejs!</h3>
        </section>

        <section id="social">
          <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/profile.php?id=100009285609720">Facebook</a>
            </li>
            <li class="twitter">
              <a href="https://twitter.com/thearcman">Twitter</a>
            </li>
            <li class="ggl">
              <a href="https://plus.google.com/u/0/110558789864230541494/posts">Google Plus</a>
            </li>
          </ul>
        </section>

        <section id="summary">${body}</section>
      </section>
    </body>
  </html>`;
};
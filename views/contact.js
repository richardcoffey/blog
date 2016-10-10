/**
 * @file contact.js
 * Functions, and HTML used to display stuff on the contact page on my portfolio website.
 */

//Creating the function that imports HTML to the blog.js file.
module.exports = (isSent) => {
let html = `
<section id="con">
  <form action="/contact" method="post">
    <label for="name">Your Name</label>
    <input type="text" name="name"/>
    <label for="email">Email</label>
    <input type="text" name="email"/>
    <label for="num" >Number</label>
    <input type="text" name="num"/>
    <label for="para">Contact me</label>
    <textarea name="para" rows="10" cols="50"></textarea>
    <input type="Submit" value="Submit"/>
  </form>
</section>
`;

if (isSent) {
   html += `
  <section id="thanks">
    <h3>Thanks for contacting me!</h3>
  </section>
  `;
};

return html;
};
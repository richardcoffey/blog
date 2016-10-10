/**
 * @file games.js
 * Creating a page that pulls information from certain game API's, like Destiny, and CS:GO. 
 */

const destiny = require('destiny-client')('84445f639c1f45c5ae4341957eaeef74')

/**
 * Resolves HTML for game page.
 * @returns {object} Promise object.
 */
module.exports = () => {
  return new Promise((resolve, reject) => {
    destiny.Search({
      membershipType: 1,
      name: 'CoffeyClan'
    })
    .then((users) => {
      destiny.Account({
        membershipType: 1,
        membershipId: users[0].membershipId
      })
      .then((account) => {
        let html = '';
        for (let key in account.characters) {
          html += ` <img src ="http://www.bungie.net${account.characters[key].emblemPath}"> `
        }
        resolve(`<h1>My destiny characters</h1>` + html);
      })
      .catch((error) => reject(error));
    })
    .catch((error) => reject(error));
  });
};
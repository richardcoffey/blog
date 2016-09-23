/**
 * @file games.js
 * Creating a page that pulls information from certain game API's, like Destiny, and CS:GO. 
 */

const destiny = require('destiny-client')('84445f639c1f45c5ae4341957eaeef74')

destiny
  .Search({
    membershipType: 1,
    name: 'CoffeyClan'
  })
  .then(users => {
    console.debug('user s', users);
  });

  module.exports = (destiny);
  console.log(destiny);
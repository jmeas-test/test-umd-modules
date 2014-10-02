var mn = require('marionette/core');
var Region = require('marionette/region');

console.log('Marionette:', mn);

var region = new Region({
  el: 'body'
});

console.log('region', region);

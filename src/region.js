var mn = require('marionette/lib/core');
var Region = require('marionette/lib/region');

console.log('Marionette:', mn);

var region = new Region({
  el: 'body'
});

console.log('region', region);

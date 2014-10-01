var mn = require('marionette/components/core');
var Region = require('marionette/components/region');

console.log('Marionette:', mn);

var region = new Region({
  el: 'body'
});

console.log('region', region);

var greetings = require('./greetings.json')

var greet = function() { 
    console.log(greetings.es);
}

module.exports = greet;
//shares variable name 'greet' with english.js
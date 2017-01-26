var greetings = require('./greetings.json');

var greet = function() { 
    console.log(greetings.en);
}

module.exports = greet;
//shares variable name 'greet' with spanish.js
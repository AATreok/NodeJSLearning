//first module; will grab the code from greet4.18.js and runs it
// original --> require('./greet4.18.js') // ./--> same folder
// cannot just call greet from the code in greet4.18.js; have to set 'access' (this is just scope)
// good news is module is self-contained, so can name var here greet without conflict

/* now have this new greet function that has been exported, rather than running all of greet4.18.js */
var greet = require('./greet4.18'); //js is optional in Node
greet();

//require and exports are available in javascript core
var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var fucku = require('./greet2').fucku;
fucku();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed to Hello World'

var greet3b = require('./greet3');
greet3b.greet(); //outputs 'changed to hello world'
                 //that's interesting.

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var Greet42 = new require('./greet42').Greeter;
var grtr42 = new  Greet42();
grtr42.greet();

var greet5 = require('./greet5').greet;
greet5();
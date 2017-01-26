var util = require('util'); //no ./ because it looks for a native JS file first

var name = 'Tony'
var greeting = util.format('Hello, %s', name);
util.log(greeting);
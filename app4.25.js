//This section will go more into requires, but on a more complex scale

//You can 'require' a folder; all files inside the folder will be added to the module. 
//Note: If the folder shares a name with a js file, then the js file takes precedence.
//This is pretty powerful stuff.

var greet = require('./greet');
greet.english();
greet.spanish();
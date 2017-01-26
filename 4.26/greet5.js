//This is known as the revealing module pattern
// Considered very clean and common
var greeting = "HELLO WORLD 5!!!!!";

function greet() {
    console.log(greeting);
}

module.exports = {
    greet/*name*/: greet/*function*/
    //this only exports the function. The variable is private/hidden. 
}
//function statement
function greet() {
    console.log("hi");
}
greet();

//first class function
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//this creates a variable with a function value
var greetMe = function() {
    console.log("Hello Doug. This is greetMe");
}
greetMe();

// greetMe can be passed around
logGreeting(greetMe);

// can create a temporary function that is pased into an expression
logGreeting(function() {
    console.log('Hello Doug. This is special logGreetings.')
});

// This will be used a lot in the course, so reference this file if you need to
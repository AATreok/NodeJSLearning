// object properties/methods
var object = {
    greet : 'Hello'
}
console.log(object.greet);
console.log(object['greet']);//both have same value, mean exactly same thing

var prop = 'greet';
console.log(object[prop]);//again, same thing as above, but you've replaced the name of the property with a variable named 'prop'

//functions and arrays
var arr = [];
arr.push(function() {
    console.log('Hello world 1');
});
arr.push(function() {
    console.log('Hello world 2');
});
arr.push(function() {
    console.log('Hello world 3'); //remember functions are first class, so you can treat them like variables.
});

arr.forEach(function(item) {
    item();//invoking function sitting in array
});
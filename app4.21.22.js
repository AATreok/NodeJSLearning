//pass by reference vs pass by object

var a = 10;
function change(b) {
    b = 4;
};
(change(a))
console.log(a);

c = {}
c.prop1 = {}
console.log( c);
function ObjChange(d) {
    d.prop1 =  function(){};
    d.prop2 = {};
}
ObjChange(c);
console.log(c);

// function expressions
//parens around function create a function expression
(function() {
    var firstname = "John";
    console.log(firstname);
}());

var firstname = "Jane";
console.log(firstname);
//first module; separate, but something that can be called on; results in 
//    structured code
// old --> console.log("Hello!");
var greet = function() {
    console.log('Hello!');
};

module.exports = greet; // because greet is VAR (REMEMBER) you only need variable name (not parens)
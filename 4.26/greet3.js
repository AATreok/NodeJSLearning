//replacing exports with own fucntion
//says function. but lies. is object
function Greetr() {
    this.greeting = 'Hello world!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}; //you can have a semi-colon here but it doesn't matter...

module.exports = new Greetr();
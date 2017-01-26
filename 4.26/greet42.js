module.exports.Greeter = function Greeter() {
    this.greeting = 'Hello world!4!!2!';
    this.greet = function () {
        console.log(this.greeting);
    }
};
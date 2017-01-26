function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + " " + this.lastname);
};
//Prototype code adds some method properties to all objects created from the function constructor prior to it (Person in this case)
var john = new Person('John', 'Doe');
console.log(john.firstname + ", " + john.lastname)
john.greet();
var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__)
console.log(jane.__proto__)
console.log(jane.__proto__ === john.__proto__) //these are the same objects; jane and john are inhertied objects from prototype, but the prototypes they inherit are one in the same

var Emitter = require('./emitter');
var util = require('util');
var emtr = new Emitter();

emtr.on('greet', function() {
/*        ^^^^^ = property name*/
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occured.')
});

emtr.on('greet', function() {
    util.log('A greeting occured, but with timestamp');
});

console.log('Hello!');
emtr.emit('greet');//WE ARE MANUALLY EMITTING THE EVENT- THERE IS NO AUTOMATION HERE TECHNICALLY
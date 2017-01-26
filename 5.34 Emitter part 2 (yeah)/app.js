var Emitter = require('events');
var eConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eConfig.GREET, function() {
/*        ^^^^^ = property name*/
    console.log('Somewhere, someone said hello.');
});

emtr.on(eConfig.FILEOPENED, function() {
    console.log('A file was opened.')
});

emtr.on(eConfig.FILESAVED, function() {
    console.log('A file was saved.');
});

console.log('Hello!');
emtr.emit(eConfig.GREET);//WE ARE MANUALLY EMITTING THE EVENT- THERE IS NO AUTOMATION HERE TECHNICALLY
emtr.emit(eConfig.FILEOPENED);
emtr.emit(eConfig.FILESAVED);
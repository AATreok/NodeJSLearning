//will use a function constructor
function Emitter() {
    this.events = {};
}

/* To clarify the prototype property, this is basically like retroactively creating a super class.
    In javascript, you create objects from other objects (the simplest being {}).
    When you prototype an object, you are saying, "anything created from this object, must inherent this property" */
Emitter.prototype.on =  function(type, listener) {
    this.events[type] = this.events[type] || []; /*what on does is  
                                                    1. create a new property on the object (events)
                                                    2. ENSURES THAT THE PROPERTY IS AN ARRAY
                                                    3. Adds listener functions to the array within the object
    */
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {   
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
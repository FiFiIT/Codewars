function Event() {
  //your implementation goes here
  this.subscribe = (f) => {
    if (!this.handler) {
      this.handler = [];
    }
    this.handler.push(f);
  };

  this.unsubscribe = (f) => {
    var i = this.handler.indexOf(f);
    if (i != -1) {
      this.handler.splice(i, 1);
    }
  };

  this.emit = (...args) => {
    this.handler.forEach((f) => f(...args));
  };
}

//KATA
class Event_KATA {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }

  unsubscribe(func) {
    this.subscribers.delete(func);
  }

  emit(...args) {
    this.subscribers.forEach((s) => s(...args));
  }
}

// WORKING

var event = new Event_KATA();

function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
event.emit(1, "foo", true);

console.log(f.calls === 1); // calls a handler
console.log(f.args); // passes arguments [1, "foo", true]

event.unsubscribe(f);
event.emit(2);

console.log(f.calls === 1); //no second call

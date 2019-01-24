
const events = require('events');
const eventEmitter = new events.EventEmitter();
// Create an event handler
const food = function() {
  console.log('Enjoy your food!');
}

// Assign the event handler to an event:
eventEmitter.on('enjoy', food);

// Fire the 'enjoy' event
eventEmitter.emit('enjoy');


// Another example
const shop = () => {
  console.log('I am going to the Tesco! Would you like something?');
}
eventEmitter.on('tesco', shop);

eventEmitter.emit('tesco');

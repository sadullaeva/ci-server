const EventEmitter = require('events');
const Queue = require('./queue');

class BuildEmitter extends EventEmitter {}

const buildEmitter = new BuildEmitter();
const buildQueue = new Queue();

buildEmitter.on('request', id => {
  buildQueue.enqueue(id);
});

module.exports = buildEmitter;

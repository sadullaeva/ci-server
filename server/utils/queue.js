class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return;
    return this.queue.shift();
  }

  isEmpty() {
    return !this.queue.length;
  }
}

module.exports = Queue;

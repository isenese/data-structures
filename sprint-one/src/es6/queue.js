class Queue {

  constructor() {
    this.counter = 0;
    this.front = 0;
    this.storage = {};
  }
  enqueue(value) {
    this.storage[this.front + this.counter] = value;
    this.counter++;
  }
  dequeue() {
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    this.counter--;
    return temp;
  }
  size() {
    return (this.counter < 0 ? this.counter = 0 : this.counter);
  }

}

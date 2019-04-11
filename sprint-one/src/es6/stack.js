class Stack {

  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push(value) {
    this.counter++;
    this.storage[this.counter] = value;

  }
  pop() {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return temp;
  }
  size() {
    return ( this.counter < 0 ? this.counter = 0 : this.counter);
  }


}
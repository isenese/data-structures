var Queue = function() {
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {
  storage: {},
  counter: 0,
  front: 0,
  enqueue: function (value) {
    this.storage[this.front + this.counter] = value;
    this.counter++;
  },

  dequeue: function () {
    this.counter--;
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  },

  size: function () {
    return (this.counter < 0 ? this.counter = 0 : this.counter);
  }
};



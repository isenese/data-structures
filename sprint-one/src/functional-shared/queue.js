var Queue = function() {
  var storage = {
    counter: 0,
    front: 0,
    membercounter: 0
  };
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function (value) {
    this.membercounter++;
    this[this.membercounter] = value;
    this.counter++;
  },
  dequeue: function () {

    this.front++;
    var temp = this[this.front];

    delete this[this.front];
    this.counter--;
    return temp;
  },
  size: function () {
    return (this.counter < 0 ? this.counter = 0 : this.counter);
  }
};



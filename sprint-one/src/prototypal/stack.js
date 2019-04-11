var Stack = function() {
  var obj = Object.create(stackMethods);
  return obj;
};

var stackMethods = {
  storage: {},
  counter: 0,
  push: function (value) {

    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function () {
    this.counter--;
    let temp = this.storage[this.counter];
    delete this.storage[this.counter];
    return temp;
  },
  size: function () {
    return (this.counter < 0 ? this.counter = 0 : this.counter);
  }
};



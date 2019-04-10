var Stack = function() {
  var obj = {
    count: 0,
  };
  _.extend (obj, stackMethods);
  return obj;
};
var stackMethods = {
  push: function (value) {
    this.count++;
    this[this.count] = value;
  },
  pop: function () {
    var temp = this[this.count];
    delete this[this.count];
    this.count--;
    return temp;
  },
  size: function () {
    return (this.count < 0? this.count = 0:this.count);
  }
};



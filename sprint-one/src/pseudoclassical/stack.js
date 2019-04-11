var Stack = function() {
  this.height = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.height] = value;
  this.height++;
};

Stack.prototype.pop = function () {
  this.height--;
  var temp = this.storage[this.height];
  delete this.storage[this.height];
  return temp;
};

Stack.prototype.size = function () {
  return ( this.height < 0 ? this.height = 0 : this.height);
};


var Queue = function() {
  this.length = 0;
  this.storage = {};
  this.front = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.front + this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function () {
  this.length--;
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return temp;
};

Queue.prototype.size = function () {
  return (this.length < 0 ? this.length = 0 : this.length);
};


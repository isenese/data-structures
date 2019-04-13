var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)){
    this._storage[item] = true;
    this.counter++;
  }
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  this.counter--;
};

setPrototype.size = function() {
  return this.counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

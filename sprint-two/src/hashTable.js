

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  if (this._storage[index]) {
    for (i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i].pop();
        this._storage[index][i].push(v);
      }
    }
    this._storage[index].push([k, v]);
  }
  this._count++;
  if (this._count > this._limit * 0.75) {
    this.resize (this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //    array[index] = bucket
  if (!this._storage[index]) {
    return undefined;
  } else {
    for (i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i]) {
      this._storage[index].splice(i, 1);
    }
  }
  if (this._count < this._limit * 0.25) {
    this.resize (this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit) {

  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;
  //var bucket = this._storage[index]
  for (var key in oldStorage) {
    this._storage[key] = oldStorage[key];
    if (Array.isArray(this._storage[key])) {
      for (var i = 0; i < oldStorage.length; i++) {
        this._storage.insert(oldStorage[i][0],  oldStorage[i][1]);
      }
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: 0(1)
 */



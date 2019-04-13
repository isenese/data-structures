

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //    array[index] = bucket
  if (!this._storage[index]) {
    return 'element doesn\'t exist';
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
  for (var i = 0; i < this._storage[index].length; i++){
    if (this._storage[index][i]){
      this._storage[index].splice(i,1);
    }
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: 0(1)
 */



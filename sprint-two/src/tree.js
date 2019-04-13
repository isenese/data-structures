var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend ( newTree, treeMethods);
  newTree.children = [];
  newTree.counter = 1;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree (value));
  this.counter++;
  return value;
};

treeMethods.contains = function(target) {
  var isThere = false;
  if (this.value === target) {
    isThere = true;
  } else {
    for (var i = 0; i < this.children.length; i ++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return isThere;
};

treeMethods.size = function() {
  return this.counter;
};
/*
 * Complexity: What is the time complexity of the above functions?
 addChild -- O(1)
 contains -- 0(n)
 */

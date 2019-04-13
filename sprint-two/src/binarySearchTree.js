var BinarySearchTree = function(value) {
  var obj = Object.create(binarySearchTreeMethods);
  obj.value = value;
  obj.value.left;
  obj.value.right;
  return obj;
};

var binarySearchTreeMethods = {

  insert: function (value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }else if (value > this.value) {
      if (!this.right) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains:function (value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  },

  depthFirstLog: function (callback) {
    this.value = callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log)
 contains: O(log)
 depthFirstLog: O(n)
 */

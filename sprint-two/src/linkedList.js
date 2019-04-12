var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Object.create(Node);
    newNode.value = value;
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail === null) {
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    list.head = list.head.next;
    return list.head.value;
  };

  list.contains = function(target) {
    var traveler = list.head;
    while (traveler != null) {
      if (traveler.value === target) {
        return true;
      }
      traveler = traveler.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 Addtotail: constant
 removeHead: constant
 contains: linear
 */


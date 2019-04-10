var Queue = function() {
  var someInstance = {};
  var membercount = 0;
  var counter= 0;
  var front = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[membercount]=value;
    membercount++;
    counter ++;
  };

  someInstance.dequeue = function() {
    //membercount--;
    var temp = storage[front];
    delete storage[front];
    front++;
    counter --;
    return temp;
  };

  someInstance.size = function() {
    return (counter < 0 ? counter = 0 : counter);
  };

  return someInstance;
};

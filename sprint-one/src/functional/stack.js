var Stack = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    var temp = storage[counter];
    counter--;
    return temp;
  };

  someInstance.size = function() {
    return (counter < 0 ? counter = 0: counter);
  };

  return someInstance;
};

var Graph = function() {
  this.nodes = {};
//  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes.node) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var x = 0; x < this.nodes[node].length; x++) {
    this.removeEdge(this.nodes[node][x], node);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var x = 0; x < this.nodes[fromNode].length; x++) {
    if (this.nodes[fromNode][x] === toNode) {
      return true;
    }
  }
  return false;
};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var x = 0; x < this.nodes[fromNode].length; x++) {
    if (this.nodes[fromNode][x] === toNode) {
      this.nodes[fromNode].splice(x, 1);
    }
  }
  for (var x = 0; x < this.nodes[toNode].length; x++) {
    if (this.nodes[toNode][x] === fromNode) {
      this.nodes[toNode].splice(x, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 addNode:constant
 contains:linear
 removeNode:O(2n)
 hasEdge: linear
 addEdge: constant
 removeEdge: O(2n)
 forEachNode: linear
 */

function BinarySearchTree() {
  this.root = null;
  this.count = 0;

  this.insert = function(val) {
    if (this.root === null) {
      this.root = new Node(val);
      this.count++;
    } else {
      this.inserter(this.root, val);
      this.count++;
    }
  }

  this.inserter = function(root, val) {
    if (val > root.val) {
      if (root.right === null) {
        root.right = new Node(val);
      } else {
        this.inserter(root.right, val);
      }
    } else if (val < root.val) {
      if (root.left === null) {
        root.left = new Node(val);
      } else {
        this.inserter(root.left, val);
      }
    } else { 
      return null;
    }
  }

  this.size = function() {
    return this.count;
  }

  this.contains = function(val) {
    var contain = false;
    var current = this.root;
    while(current && !contain) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        contain = true;
      }
    }
    return contain;
  }

  this.depth = function() {
    var leftSide = this.root;
    var rightSide = this.root;
    var leftDepth = 0;
    var rightDepth = 0;
    while(leftSide) {
      leftSide = leftSide.left;
      leftDepth ++;
    };
    while(rightSide) {
      rightSide = rightSide.rightSide;
      rightDepth ++;
    };
    return Math.max(leftDepth, rightDepth);
  }

  this.balance = function() {
    var leftSide = this.root;
    var rightSide = this.root;
    var leftDepth = 0;
    var rightDepth = 0;
    while(leftSide) {
      leftSide = leftSide.left;
      leftDepth ++;
    };
    while(rightSide) {
      rightSide = rightSide.rightSide;
      rightDepth ++;
    };
    return leftDepth - rightDepth;
  }

  this.preOrder = function() {
    var result = [];
    var current = this.root;

    function traverse(current) {
      result.push(current.val);
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(current);
    return result;
  }

  this.inOrder = function() {
    var result = [];
    var current = this.root;

    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      result.push(current.val);
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(current);  
    return result;
  }

  this.postOrder = function() {
    var result = [];
    var current = this.root;

    function traverse(current) {
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      result.push(current.val);
    }
    traverse(current);
    return result;
  }

    this.breadthFirst = function() {
    var queue = [this.root];
    var result = [];

    while(queue.length > 0) {
      var node = queue.shift();
      result.push(node.val);
      if (node.left) {
        queue.push(node.left);
      };
      if (node.right) {
        queue.push(node.right);
      };
    }
    return result;
  }
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var bst = new BinarySearchTree;
bst.insert(5);
bst.insert(8);
bst.insert(12);
bst.insert(2);
bst.insert(4);
bst.insert(1);
console.log(bst.contains(8));
console.log(bst.size());
console.log(bst.depth());
console.log(bst.balance());
console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.breadthFirst());

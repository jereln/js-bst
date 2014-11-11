#Binary Search Tree

##Usage

The tests are contained within the bst.js file. Simply enter "node bst.js" into your console and the results will be shown.

###insert(val)
will insert the value val into the BST.  If val is already present, it will be ignored.

###contains(val)
will return True if val is in the BST, False if not. Pick just one method of traversal for this.

###size()
will return the integer size of the BST (equal to the total number of values stored in the tree), 0 if the tree is empty.

###depth()
will return an integer representing the total number of levels in the tree. If there is one value, the depth should be 1, if two values it will be 2, if three values it may be 2 or three, depending, etc.

###balance()
will return an integer, positive or negative that represents how well balanced the tree is. Trees which are higher on the left than the right should return a positive value, trees which are higher on the right than the left should return a negative value.  An ideally-balanced tree should return 0.

###in_order
return the values in the tree using in-order traversal.

###pre_order
return the values in the tree using pre-order traversal.

###post_order
return the values in the tree using post_order traversal.

###breadth_first
return the values in the tree using breadth-first traversal.

##Approach
After setting up the binary tree with traversals, this assignment was mostly transcribing ruby into javascript. Most everything translated pretty easily over. Since I am still learning javascript, there were a few problems I ran into with syntax.

##Resources
http://en.wikipedia.org/wiki/Tree_traversal
/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
  var storage  = {};
  var min = [];
  var top = 0;

  // add an item to the top of the stack
    this.push = function(value) {
    if ( min.length === 0 || value <= min[min.length - 1] ) {
      min.push(value);
    }
    storage[top] = value;
    top ++;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (storage[top - 1] === min[min.length - 1] ) {
        min.pop();
      }
      return storage[top - 1];
    
    };

  // return the number of items in the stack
    this.size = function() {
    	return top ; 
    };
  
  // return the minimum value in the stack
    this.min = function() {
	return min[min.length - 1];
    };


  };


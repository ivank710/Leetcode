/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  if (this.min === null || this.min > x) this.min = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.stack.pop();  

  if (val === this.min) {
    this.min = this.stack.length === 0 ? null : Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


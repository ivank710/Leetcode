/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let secondLast = 0; //2
  let last = 1; //3

  for (let i = 2; i <= n; i++) {
    let temp = last;  //2
    last = temp + secondLast; 
    secondLast = temp;   //2
  }

  return last;
};


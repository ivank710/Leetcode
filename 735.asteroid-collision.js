/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];

    if (curr >= 0) {
      stack.push(curr);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] >= 0 && stack[stack.length - 1] < Math.abs(curr)) {
        stack.pop();
      }

      if (stack.length < 1 || stack[stack.length - 1] < 0) {
        stack.push(curr);
      } else if (stack.length > 0 && stack[stack.length - 1] === Math.abs(curr)) {
        stack.pop();
      }
    }
  }

  return stack;
};


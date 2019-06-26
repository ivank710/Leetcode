/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
const isPrime = num => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

var countPrimes = function(n) {
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count += 1;
  }

  return count;  
};


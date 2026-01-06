/*
 * Problem: Fizz Buzz
 * Link: https://leetcode.com/problems/fizz-buzz
 *
 * Approach:
 * - For Loop
 * - IF Condition
 *
 * Runtime: 0 ms
 * Memory: 58.62 MB
 */

function fizzBuzz(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(String(i));
    }
  }
  return res;
}

// Test run:
console.log(fizzBuzz(5));

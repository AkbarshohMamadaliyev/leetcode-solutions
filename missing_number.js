/*
 * Problem: Missing Number
 * Link: https://leetcode.com/problems/missing-number
 *
 * Approach:
 * - includes() method
 *
 * Runtime: 213 ms
 * Memory: 57.64 MB
 */

function missingNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return nums.length;
}

// Test run:
missingNumber([3, 0, 1]);

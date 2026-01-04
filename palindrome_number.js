/*
 * Problem: Palindrome Number
 * Link: https://leetcode.com/problems/palindrome-number
 *
 * Approach:
 * - string() - convert number to string
 * - split("") - convert string to array
 * - reverse() - make array reverse
 * - join("") - combine array elements into a string
 *
 * Runtime: 8 ms
 * Memory: 65.00 MB
 */

function isPalindrome(x) {
  let convertStr = String(x);
  let reversedNum = convertStr.split("").reverse().join("");

  return convertStr === reversedNum;
}

// Test run:
console.log(isPalindrome(121));

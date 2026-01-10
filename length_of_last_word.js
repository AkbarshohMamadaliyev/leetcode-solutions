/*
 * Problem: Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word
 *
 * Approach:
 * - For of
 * - trim()
 * - split()
 * - reverse()
 * - join()
 * - break
 *
 * Runtime: 0 ms
 * Memory: 56.08 MB
 */

function lengthOfLastWord(s) {
  let count = 0;
  let trimStr = s.trim();
  let reverseStr = trimStr.split("").reverse().join("");
  for (let word of reverseStr) {
    if (word !== " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
}

// Test run:
console.log(lengthOfLastWord("   fly me   to   the moon  "));

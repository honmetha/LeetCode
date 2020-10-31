// 7. Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your
// function returns 0 when the reversed integer overflows.


// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0


// Constraints:
// - -231 <= x <= 231 - 1


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} x
// @return {number}

const reverse = x => {
  const isNegative = x < 0 ? true: false;
  if (isNegative) x = Math.abs(x);

  x = Number((x + "").split("").reverse().join(""))
  if (x > 2 ** 31) return 0;
  if (isNegative) x = -Math.abs(x);

  return x;
};

// Test cases
// -2147483647
// -514748364
// -714748364
// -28379229
// -98799877
// -5649873
// -834598
// -11231
// -9823
// -1200
// -123
// -58
// -5
// 0
// 6
// 38
// 120
// 123
// 894
// 7692
// 6774
// 10329
// 84874
// 547858
// 2030182
// 92381280
// 12345213
// 747564748
// 998877665
// 1142233447
// 2147483647

module.exports = reverse;
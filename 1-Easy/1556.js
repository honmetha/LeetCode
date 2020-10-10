// 1556. Thousand Separator

// Given an integer n, add a dot (".") as the thousands separator and return it in string format.


// Example 1:
// Input: n = 987
// Output: "987"

// Example 2:
// Input: n = 1234
// Output: "1.234"

// Example 3:
// Input: n = 123456789
// Output: "123.456.789"

// Example 4:
// Input: n = 0
// Output: "0"


// Constraints:
// - 0 <= n < 2^31


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} n
// @return {string}

// Original One-Liner
const thousandSeparator = n => (n + "").split("").reverse().map((num, i) => ((i + 1) % 3) === 1 && i !== 0 ? num + "." : num).reverse().join("");

// Faster
const thousandSeparator = n => {
  let count = 0;
  n = n + "";

  for (i = n.length - 1; i >= 0; i--) {
    count++;
    if (count % 3 === 1 && count !== 1) n = n.slice(0, i + 1) + "." + n.slice(i + 1);
  }

  return n;
};


// JavaScript Array.reduce
// https://leetcode.com/problems/thousand-separator/discuss/806406/JavaScript-Array.reduce
const thousandSeparator = (n) => ('' + n).split('').reverse().reduce((acc, num) => acc.length % 4 == 3 ? num + '.' + acc : num + acc, '');


// ⭐️  [ Javascript / Python3/ C++ ] 🚀  1-Liners
// https://leetcode.com/problems/thousand-separator/discuss/805674/Javascript-Python3-C%2B%2B-1-Liners
let thousandSeparator = n => n < 1000 ? String(n) : thousandSeparator(Math.floor(n / 1000)) + '.' + _.padStart(String(n % 1000), 3, 0);


// Test cases
// 123456789
// 0
// 10
// 1234
// 987
// 982349872340193848
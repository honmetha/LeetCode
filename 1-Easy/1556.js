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

const thousandSeparator = n => (n + "").split("").reverse().map((num, i) => ((i + 1) % 3) === 1 && i !== 0 ? num + "." : num).reverse().join("");


const thousandSeparator = n => {
  let count = 0;
  n = n + "";

  for (i = n.length - 1; i >= 0; i--) {
    count++;
    if (count % 3 === 1 && count !== 1) n = n.slice(0, i + 1) + "." + n.slice(i + 1);
  }

  return n;
};

// Test cases
// 123456789
// 0
// 10
// 1234
// 987
// 982349872340193848
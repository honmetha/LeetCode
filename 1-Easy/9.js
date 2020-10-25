// 9. Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same
// backward as forward.

// Follow up: Could you solve it without converting the integer to a string?


// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false


// Constraints:
// - -231 <= x <= 231 - 1


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} x
// @return {boolean}

const isPalindrome = x => {
  if (x < 0) return false;
  let newX = x;
  let numbersArr = [];

  for (let i = 10; newX > 0; i *= 10) {
    let moduloNumber = newX % i;
    while (moduloNumber > 9) moduloNumber /= 10;

    numbersArr.push(moduloNumber);
    newX -= newX % i;
  };

  let start = 0;
  let end = numbersArr.length - 1;

  while (start < end) {
    if (numbersArr[start] !== numbersArr[end]) return false;
    start++;
    end--;
  }

  return true;
};

// Test cases
// -2147483648
// -1500000000
// -999999999
// -20455402
// -1234321
// -112211
// -22022
// -5000
// -333
// -22
// -5
// 0
// 5
// 15
// 77
// 838
// 9876
// 12021
// 48789
// 456654
// 8888888
// 1892371
// 97979797
// 33344333
// 555555555
// 894949389
// 1234554321
// 1234564321
// 2147483647

module.exports = isPalindrome;
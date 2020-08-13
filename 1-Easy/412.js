// 412. Fizz Buzz

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} n
// @return {string[]}

const fizzBuzz = n => {
  let output = [];

  for (i = 1; i <= n; i++) {
    let num = "";
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) num += "Fizz";
      if (i % 5 === 0) num += "Buzz";
    } else {
      num += i;
    }
    output.push(num);
  }

  return output;
};


// 1-line JavaScript O(n) solution
// https://leetcode.com/problems/fizz-buzz/discuss/89949/1-line-JavaScript-O(n)-solution
const fizzBuzz = n => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);


// Straightforward JS Solution; faster than 94%
// https://leetcode.com/problems/fizz-buzz/discuss/526563/Straightforward-JS-Solution-faster-than-94
const fizzBuzz = n => {
  let result = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) result.push("FizzBuzz");
    else if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i + "");
  }
  return result;
};
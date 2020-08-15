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

// Faster
const fizzBuzz = n => {
  let output = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push("FizzBuzz");
    else if (i % 3 === 0) output.push("Fizz");
    else if (i % 5 === 0) output.push("Buzz");
    else output.push(i + "");
  }
  return output;
};

// One-Liner
const fizzBuzz = n => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
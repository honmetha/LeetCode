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

  for (i = 1; i < n + 1; i++) {
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
// 420. Strong Password Checker

// A password is considered strong if below conditions are all met:

// 1. It has at least 6 characters and at most 20 characters.
// 2. It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
// 3. It must NOT contain three repeating characters in a row ("...aaa..." is weak, 
//    but "...aa...a..." is strong, assuming other conditions are met).
   
// Write a function strongPasswordChecker(s), that takes a string s as input, and return 
// the MINIMUM change required to make s a strong password. If s is already strong, return 0.

// Insertion, deletion or replace of any one character are all considered as one change.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string} s
// @return {number}

const strongPasswordChecker = function(s) {
  let counter = 0;
  let length = 0, lowercase = 0, uppercase = 0, digit = 0, repeat = 0;

  s.length > 20 ? length -= (s.length-20) : null;
  s.length < 6 ? length += (6-s.length) : null;

  /[A-Z]/.test(s) ? null : uppercase++;
  /[a-z]/.test(s) ? null : lowercase++;
  /\d/.test(s) ? null : digit++;

  // for (i = 0; i < s.length; i += 3) {
  //   if (s[i] === s[i + 1] && s[i] === s[i + 2]) {
  //     repeat++;
  //   }
  // }

  console.log(`length = ${length}`);
  console.log(`lowercase = ${lowercase}`);
  console.log(`uppercase = ${uppercase}`);
  console.log(`digit = ${digit}`);
  // console.log(`repeat = ${repeat}`);
  return counter;
};


// Testcases

// ""
// "a"
// "aaa"
// "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
// "abc1234567890ABCaaaaaaaaaaaaaa"
// "aA1aaAaaA1aaAaaAaaA1"
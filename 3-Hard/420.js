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

const strongPasswordChecker = (s) => {
  let output = 0, length = 0, lowercase = 0, uppercase = 0, digit = 0, repeat = 0;

  // length
  s.length > 20 ? length -= (s.length-20) : null;
  s.length < 6 ? length += (6-s.length) : null;

  // lowercase, uppercase, digit
  /[A-Z]/.test(s) ? null : uppercase++;
  /[a-z]/.test(s) ? null : lowercase++;
  /\d/.test(s) ? null : digit++;

  // repeat
  let repeatArr = [];
  for (i = 0; i < s.length; i += 0) {
    let repeatCount = 1;
    for (j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        repeatCount++;
      } else {
        break;
      }
    }
    if (repeatCount >= 3) {
      repeatArr.push(repeatCount);
    }
    i += repeatCount;
  }

  // conclusion
  let toRemove = 0
  if (length < 0) {
    toRemove = -length;
  }

  while (toRemove !== 0) {
    let loopCheck = toRemove;
    for (i = 0; i < repeatArr.length; i++) {
      if (repeatArr[i] % 3 === 0 && toRemove >= 1) {
        repeatArr[i] -= 1;
        toRemove -= 1;
      }
    }
    for (i = 0; i < repeatArr.length; i++) {
      if (repeatArr[i] % 3 === 1 && toRemove >= 2) {
        repeatArr[i] -= 2;
        toRemove -= 2;
      }
    }
    for (i = 0; i < repeatArr.length; i++) {
      if (repeatArr[i] % 3 === 2 && toRemove >= 3) {
        repeatArr[i] -= 3;
        toRemove -= 3;
      }
    }
    if (loopCheck === toRemove) {
      toRemove = 0;
    }
  }

  repeat = repeatArr.reduce((acc, num) => acc + (Math.floor(num / 3)), 0);

  if (length === 0) {
    if (repeat > lowercase + uppercase + digit) {
      output = repeat;
    } else {
      output = lowercase + uppercase + digit;
    }
  } else if (length < 0) {
    if (repeat > lowercase + uppercase + digit) {
      output = Math.abs(length) + repeat;
    } else {
      output = Math.abs(length) + lowercase + uppercase + digit;
    }
  } else if (length > 0) {
      output = lowercase + uppercase + digit;
      length > output ? output = length : null;
  }

  return output;
};


// Testcases

// ""
// " "
// "a"
// "aaa"
// "123"
// "1212"
// "12121"
// "aaaab"
// "aaa1B"
// "aaaabc"
// "aaaaB4"
// "aaaaBB"
// "aaaabb"
// "aaaaaaaaaaaaaaaaaaaaa"
// "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
// "abc1234567890ABCaaaaaaaaaaaaaa"
// "123123123123123123abc123123123123123"
// "12345678901234567890"
// "aA1aaAaaA1aaAaaAaaA1"
// "aaaaaaabbbbbbb12SSSSQWWWWWWW"
// "aaaaaaabbbbbbbbbbbb12SSSSQWWWWWWW"
// "aaaaaaabbbbbbb1234567SSSSQWWWWWWW"
// "aaaaaaa1BBBBBBB"
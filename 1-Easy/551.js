// 551. Student Attendance Record I

// You are given a string representing an attendance record for a student.
// The record only contains the following three characters:

//   1.'A' : Absent.
//   2.'L' : Late.
//   3.'P' : Present.

// A student could be rewarded if his attendance record doesn't contain
// more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True

// Example 2:
// Input: "PPALLL"
// Output: False


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {boolean}

// Original
const checkRecord = s => {
  let countA = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "A" && ++countA > 1) return false;
    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") return false;
  }
  
  return true;
};

// Fast & Easy to understand
const checkRecord = s => s.split('A').length <= 2 && s.indexOf('LLL') === -1;

// Alternative One-Liner
const checkRecord = s => !/^.*(A.*A|L{3,}).*$/.test(s);
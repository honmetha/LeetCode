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

const checkRecord = s => {
  let countA = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "A") countA++;
    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") return false;
    if (countA > 1) return false;
  }
  
  return true;
};


// 1 line RegExp javascript solution 48ms
// https://leetcode.com/problems/student-attendance-record-i/discuss/518209/1-line-RegExp-javascript-solution-48ms
const checkRecord = s => !(s.replace(/A/g,"").length < s.length - 1 || s.replace(/LLL/g,"").length !== s.length);


// JavaScript 1 line short solution without regex
// https://leetcode.com/problems/student-attendance-record-i/discuss/346015/JavaScript-1-line-short-solution-without-regex
const checkRecord = s => s.split("").filter(s => s == "A").length <= 1 && !s.includes("LLL");
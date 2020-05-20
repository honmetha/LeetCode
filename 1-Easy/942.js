// 942. DI String Match

// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]
 

// Example 1:

// Input: "IDID"
// Output: [0,4,1,3,2]

// Example 2:

// Input: "III"
// Output: [0,1,2,3]

// Example 3:

// Input: "DDI"
// Output: [3,2,0,1]
 

// Note:

// 1 <= S.length <= 10000
// S only contains characters "I" or "D".


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string} S
// @return {number[]}

const diStringMatch = S => {
  let output = [];
  let N = Array.from(Array(S.length + 1).keys());

  for (item of S) {
    if (item === "I") {
      output.push(N[0]);
      N.shift();
    } else {
      output.push(N[N.length - 1]);
      N.pop();
    }
  }
  output.push(N[0]);

  return output;
};



const diStringMatch = S => {
  let output = [];
  let N = Array.from(Array(S.length + 1).keys());
  for (item of S) item === "I" ? output.push(N.shift()) : output.push(N.pop());
  output.push(N[0]);
  return output;
};



const diStringMatch = S => {
  let output = [], x = 0, y = S.length;
  for (item of S) {
    if (item === "I") {
      output = [...output, x];
      x++;
    } else {
      output = [...output, y];
      y--;
    }
  }
  return [...output, x];
};



// Javascript solution two pointer(98.31% time. 100% space)
// https://leetcode.com/problems/di-string-match/discuss/557160/Javascript-solution-two-pointer(98.31-time.-100-space)
// Runtime: 72 ms, faster than 98.31% of JavaScript online submissions for DI String Match.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for DI String Match.
var diStringMatch = function(S) {
  var permutation = [];
  var min = 0, max = S.length
  for(var i = 0; i < S.length; i++) {
    if(S[i] === 'I') {
      permutation.push(min)
      min++;
    } else {
      permutation.push(max)
      max--;
    }
  }
  permutation.push(min);
  return permutation;
};
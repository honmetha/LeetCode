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

const diStringMatch = (S) => {
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



const diStringMatch = (S) => {
  let output = [];
  let N = Array.from(Array(S.length + 1).keys());
  for (item of S) item === "I" ? output.push(N.shift()) : output.push(N.pop());
  output.push(N[0]);
  return output;
};
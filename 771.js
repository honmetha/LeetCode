// 771. Jewels and Stones

// You're given strings J representing the types of stones that are jewels, and S representing the stones
// you have.  Each character in S is a type of stone you have. You want to know how many of the stones
// you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case
// sensitive, so "a" is considered a different type of stone from "A".


// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0


// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string} J
// @param {string} S
// @return {number}

const numJewelsInStones = (J, S) => {
  let count = 0;
  for (i = 0; i < J.length; i++) {
    let j = 0;
    while (j !== S.length) {
      J[i] === S[j] ? count++ : null;
      j++;
    }
  }
  return count;
};


// faster + less memory

const numJewelsInStones = (J, S) => {
  let count = 0;
  for (let char of S) {
    // J contains char
    if (J.lastIndexOf(char) > -1) {
        count++;
    }
  }
  return count;
};

var numJewelsInStones = function(J, S) {
  let output = 0;
  for (let stone of S){
      if (J.includes(stone))output++;
  } return output;
};
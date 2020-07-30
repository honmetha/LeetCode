// 917. Reverse Only Letters

// Given a string S, return the "reversed" string where all characters that are 
// not a letter stay in the same place, and all letters reverse their positions.


// Example 1:
// Input: "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


// Note:
// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} S
// @return {string}

// Original Solution
const reverseOnlyLetters = S => {
  let arr = S.split(''), start = 0, end = S.length - 1;

  while (start < end) {
    while (!/[a-zA-Z]/.test(arr[start])) start++;
    while (!/[a-zA-Z]/.test(arr[end])) end--;
    if (start < end) [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr.join('');
};


// 2 lines, O(n)
const reverseOnlyLetters = s => {
  const A = s.match(/[a-z]/gi);
  return s.replace(/[a-z]/gi, () => A.pop());
};


// Runtime: 52 ms / Memory Usage: 34 MB
const reverseOnlyLetters = S => {
  let placeDash = [];
  
  for (i = 0; i < S.length; i++) {
    if (S[i].replace(/[^a-z]/ig,"") !== S[i]) placeDash.push(i);
  }
  
  let updS = S.replace(/[^a-z]/ig,"").split('').reverse().join('');
  
  for (i = 0; i < placeDash.length; i++) {
    updS = updS.slice(0, placeDash[i]) + S[placeDash[i]] + updS.slice(placeDash[i]); 
  }
    
  return updS;
};
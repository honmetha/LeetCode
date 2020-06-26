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
 *  Answer
 **********************************************************************/


// @param {string} S
// @return {string}

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
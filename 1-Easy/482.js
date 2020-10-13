// 482. License Key Formatting

// You are given a license key represented as a string S which consists only alphanumeric character
// and dashes. The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K
// characters, except for the first group which could be shorter than K, but still must contain at least
// one character. Furthermore, there must be a dash inserted between two groups and all lowercase
// letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described
// above.


// Example 1:
// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"
// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Example 2:
// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"
// Explanation: The string S has been split into three parts, each part has 2 characters
// except the first part as it could be shorter as mentioned above.


// Note:
// 1. The length of string S will not exceed 12,000, and K is a positive integer.
// 2. String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
// 3. String S is non-empty.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} S
// @param {number} K
// @return {string}

// Original
const licenseKeyFormatting = (S, K) => {
  S = S.replace(/[-]/g, "").toUpperCase();
  let count = 0;

  for (i = S.length - 1; i >= 0; i--) {
    count++;
    if (count % K === 0 && S[i - 1]) S = S.slice(0, i) + "-" + S.slice(i);
  }

  return S;
};

// Fast
const licenseKeyFormatting = (S, K) => {
  const raw = S.replace(/-/g, '').toUpperCase();
  let length = raw.length, chunks = [];
  while (length > 0) {
    chunks.push(raw.substring(length - K, length));
    length -= K;
  }
  return chunks.reverse().join('-');
};

// Fast + no reverse
const licenseKeyFormatting = (S, K) => {
  S = S.replace(/-/g,'');
  const l = S.length;
  const f = (l % K === 0) ? K : l % K;
  let r = new Array();
  for (let i = f, j = 0; i <= l;j = i, i += K) {
    r.push(S.slice(j, i));
  }
  return r.join('-').toUpperCase();
};

// Test cases
// "5F3Z-2e-9-w", 4
// "5F-2e-9s-w-ooi9-3k", 3
// "j3", 4
// "0-000-0000-00-0", 2
// "0qwe1r2t3y4uio5p6asd7fghj8klzx9cvbn0m0", 2
// "0qwe1r2t3y4uio5p6asd7fghj8klzx9cvbn0m0", 9
// "0qwe1r2t3y4uio5p6asd7fghj8klzx9cvbn0m0", 4
// "--a-a-a-a--", 2
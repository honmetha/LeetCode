// 1190. Reverse Substrings Between Each Pair of Parentheses

// You are given a string s that consists of lower case English letters and brackets. 

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.


// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"

// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.

// Example 3:
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

// Example 4:
// Input: s = "a(bcdefghijkl(mno)p)q"
// Output: "apmnolkjihgfedcbq"


// Constraints:
// - 0 <= s.length <= 2000
// - s only contains lower case English characters and parentheses.
// - It's guaranteed that all parentheses are balanced.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {string}

const reverseParentheses = s => {
  while (s.includes("(")) {
    let openBracketIndex, closeBracketIndex;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") openBracketIndex = i;
      if (s[i] === ")") {
        closeBracketIndex = i;
        break;
      };
    };

    let subStringS = s.substring(openBracketIndex, closeBracketIndex + 1);
    s = s.split(subStringS);
    subStringS = subStringS.split("").reverse().join("");
    s = s.join(subStringS.substring(1, subStringS.length - 1));
  };
  
  return s;
};

// Test cases
// ""
// "()"
// "()(((((((((((())))))))))))"
// "t(b)((((((dfd(((((()))))yelp))))a))help)"
// "halloween"
// "h(()((abdsdsbs)))pp"
// "(abcd)"
// "(u(love)i)"
// "(ed(et(oc))el)"
// "a(bcdefghijkl(mno)p)q"
// "a(bc(def)gh(i)jkl(mno)p)q"
// "z(as()adw)h(f)(woei(wof)i)(jh(eow)f)"
// "((wersdfw)asdfwe(a)d()(()((((a))))(abc)as())(fd)()()a()wer)"

module.exports = reverseParentheses;
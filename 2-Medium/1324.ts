// 1324. Print Words Vertically

// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces
// are not allowed).

// Each word would be put on only one column and that in one column there will be only one word.

// Example 1:
// Input: s = "HOW ARE YOU"
// Output: ["HAY","ORO","WEU"]
// Explanation: Each word is printed vertically.
// "HAY"
// "ORO"
// "WEU"

// Example 2:
// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB","OEROOE","   T"]
// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"

// Example 3:
// Input: s = "CONTEST IS COMING"
// Output: ["CIC","OSO","N M","T I","E N","S G","T"]

// Constraints:
// 1 <= s.length <= 200
// s contains only upper case English letters.
// It's guaranteed that there is only one space between 2 words.

/***********************************************************************
 *  Solution
 **********************************************************************/

const printVertically = (s: string): string[] => {
  let output: string[] = [];
  const sArray: string[] = s.split(" ");
  const longestWordLength: number = sArray.reduce(
    (acc, word) => (word.length > acc ? word.length : acc),
    0
  );

  for (let i = 0; i < longestWordLength; i++) {
    let verticallyWord: string = "";
    for (let word of sArray) {
      if (word[i] !== undefined) verticallyWord += word[i];
      else verticallyWord += " ";
    }
    verticallyWord = verticallyWord.trimEnd();
    output.push(verticallyWord);
  }
  return output;
};

// Test cases
// "HOW ARE YOU"
// "TO BE OR NOT TO BE"
// "CONTEST IS COMING"
// "CONTEST"

export default printVertically;

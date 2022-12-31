// 68. Text Justification

// Given an array of strings words and a width maxWidth, format the text such that each line has
// exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in
// each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on
// a line does not divide evenly between words, the empty slots on the left will be assigned more
// spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2:
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3:
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Constraints:
// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

/***********************************************************************
 *  Solution
 **********************************************************************/

const fullJustify = (words: string[], maxWidth: number): string[] => {
  let count = 0;
  let output = [];
  let subArray = [];

  for (let i = 0; i < words.length; i++) {
    if (count !== 0) {
      subArray.push(" ");
      count++;
    }

    subArray.push(words[i]);
    count += words[i].length;

    const spaceLength = 1;
    if (count + spaceLength + (words[i + 1]?.length || 0) > maxWidth) {
      const short = maxWidth - count;

      if (subArray.length !== 1) {
        const gaps = Math.floor(subArray.length / 2);
        let spaces = Array.from({length: gaps}).fill(
          " ".repeat(Math.floor(short / gaps))
        );

        let remainder = short % gaps;
        for (let j = 0; j < remainder; j++) {
          spaces[j] += " ";
        }

        let k = 0;
        for (let l = 1; l < subArray.length; l += 2) {
          subArray[l] += spaces[k];
          k++;
        }
      } else {
        subArray.push(" ".repeat(short));
      }

      count = 0;
      output.push(subArray.join(""));
      subArray = [];
    }
  }
  if (count !== 0)
    output.push(subArray.join("") + " ".repeat(maxWidth - count));
  return output;
};

// Test cases
// ["This", "is", "an", "example", "of", "text", "justification."], 16
// ["What","must","be","acknowledgment","shall","be"], 16
// ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20
// ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"], 16

export default fullJustify;

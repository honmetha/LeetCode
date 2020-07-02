// 500. Keyboard Row

// Given a List of words, return the words that can be typed using letters of 
// alphabet on only one row's of American keyboard like the image below.
 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]


// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string[]} words
// @return {string[]}

const findWords = words => {
  const firstRow = "qwertyuiop", secondRow = "asdfghjkl", thirdRow = "zxcvbnm";
  let output = [];

  words.map(word => {
    let lowerCaseWord = word.toLowerCase(), targetRow, count = 0, i = 0;

    while (i < lowerCaseWord.length) {
      if (targetRow === undefined) {
        if (firstRow.includes(lowerCaseWord[i])) targetRow = firstRow;
        if (secondRow.includes(lowerCaseWord[i])) targetRow = secondRow;
        if (thirdRow.includes(lowerCaseWord[i])) targetRow = thirdRow;
        count++
      } else {
        if (targetRow.includes(lowerCaseWord[i])) {
          count++
        } else {
          break;
        }
      }

      if (count === lowerCaseWord.length) output.push(word);
      i++;
    }
  })
  return output;
};
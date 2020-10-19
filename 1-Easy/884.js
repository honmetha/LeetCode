// 884. Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space separated words.
// Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear
// in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.


// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]


// Note:
// 1. 0 <= A.length <= 200
// 2. 0 <= B.length <= 200
// 3. A and B both contain only spaces and lowercase letters.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} A
// @param {string} B
// @return {string[]}

// Original
const uncommonFromSentences = (A, B) => {
  let input = (A + " " + B).trim().replace(/  +/g, ' ');
  if (!/^[a-z]/i.test(input)) return [];

  input = input.split(" ");
  let previousWords = {};
  let result = []
  
  input.map(word => {
    previousWords[word] ? previousWords[word]++ : previousWords[word] = 1;
  })

  for (word in previousWords) {
    if (previousWords[word] === 1) result.push(word);
  }

  return result;
};

// Test cases
// "", ""
// " ", " "
// "   ", "     "
// "apple apple", "banana"
// "                                   banana   banana            ", " banana     "
// "banana", "kiwi"
// "this apple is sweet", "this apple is sour"
// " this  apple is  sweet   ", "  this  apple    is     sour"
// " this  apple is  sweet   ", "  that  oranges    are     sour"
// "car safety systems have come a long way but he was out to prove they could be outsmarted", "pink ponies and purple giraffes roamed the field cotton candy grew from the ground as a chocolate river meandered off to the side what looked like stones in the pasture were actually rock candy everything in her dream seemed to be perfect except for the fact that she had no mouth"
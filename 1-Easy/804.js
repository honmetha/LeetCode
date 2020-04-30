// 804. Unique Morse Code Words

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and 
// dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--",
// "-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. 
// For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). 
// We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:

// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string[]} words
// @return {number}

const uniqueMorseRepresentations = (words) => {
  let MorseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let arr1 = [];
  for (word of words) {
    let arr2 = [];
    for (letter of word) {
      arr2.push(MorseCode[letter.charCodeAt(0) - 97]);
    }
    arr1.push(arr2.join(""));
  }
  return new Set(arr1).size;
};



// 48 ms, faster than 99.25%; 35.4 MB, less than 77.78%
const uniqueMorseRepresentations = (words) => {
  let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let set = new Set()
  for(let i = 0; i < words.length; i++){
      let str = ""
      for(let j = 0; j < words[i].length; j++){
          let code = words[i].charCodeAt(j) - 97;
          code = arr[code];
          str += code;
      }
      set.add(str);
  }
  return set.size;
};



// 52 ms, beats 94%
// https://leetcode.com/problems/unique-morse-code-words/discuss/329303/JavaScript-One-Line-Solution-w-Explanation-(52-ms-beats-94)
const uniqueMorseRepresentations = words => {  
  const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
  }
  return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}



// Javascript faster than 93.53%
var uniqueMorseRepresentations = function(words) {
  const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  const uniques = new Set()
  
  words.forEach(word => {
      let transform = [];
      for (let letter of word) {
          transform.push(MORSE_CODE[letter.charCodeAt(0) - 97])
      }
      uniques.add(transform.join(''))
  })
  return uniques.size;
};
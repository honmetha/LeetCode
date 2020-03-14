// 1313. Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such
// pair, there are a elements with value b in the decompressed list.

// Return the decompressed list.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
 

// Constraints:

// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} nums
// @return {number[]}

const decompressRLElist = (nums) => {
  let output = [];
  for (i = 0; i < nums.length; i += 2) {
    output = output.concat(repeat(nums[i], nums[i + 1]))
  }
  return output;
}

function repeat(times, item) {
	let result = [];
	for (let i = 0; i < times; i++) {
  	result.push(item)
  }
  return result;
}


// Solution 2
const decompressRLElist = (nums) => {
  let output = [];

  for (i = 0; i < nums.length; i += 2) {
    for (j = 0; j < nums[i]; j++) {
      output.push(nums[i + 1]);
    }
  }

  return output;
}


// Solution 3
const decompressRLElist = (nums) => {
  return result;
}
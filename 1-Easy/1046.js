// 1046. Last Stone Weight

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together. 
// Suppose the stones have weights x and y with x <= y. The result of this smash is:

// - If x == y, both stones are totally destroyed;
// - If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)


// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


// Note:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} stones
// @return {number}

const lastStoneWeight = stones => {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    
    if (stones[0] > stones[1]) {
      stones[0] = stones[0] - stones[1];
      stones.splice(1, 1);
    } else {
      stones.splice(0, 2);
    }
  }
  return stones[0] ? stones[0] : 0;
};


// JavaScript Recursive One-Liner
// Runtime: 64 ms, faster than 52.83% of JavaScript online submissions
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions
// https://leetcode.com/problems/last-stone-weight/discuss/498199/JavaScript-Recursive-One-Liner
const lastStoneWeight = s => 1 === s.length ? s[0] : lastStoneWeight(s.sort((a, b) => a - b).concat(s.pop() - s.pop()));


// JavaScript recursive solution 64ms
// https://leetcode.com/problems/last-stone-weight/discuss/294934/JavaScript-recursive-solution-64ms
const lastStoneWeight = stones => {
  const len = stones.length;
  if(len === 1) return stones;
  stones.sort((a,b) => a-b);
  const last = stones[len - 1];
  const secToLast = stones[len-2];
  return lastStoneWeight(stones.slice(0,stones.length-2).concat(last-secToLast));
};
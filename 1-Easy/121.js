// 121. Best Time to Buy and Sell Stock

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} prices
// @return {number}

const maxProfit = prices => {
  let min = 0, max = 0, result = 0;

  for (i = prices.length - 1; i >= 0; i--) {
    if (max === 0) {
      if (prices[i - 1] >= prices[i]) continue;
      max = prices[i];
      min = prices[i - 1];  
    } else {
      if (max >= prices[i - 1]) {
        if (prices[i - 1] < min) min = prices[i - 1];
      } else {
        if (max - min > result) result = max - min;
        max = min = 0;
      }
    }
  }

  return result;
};


// JavaScript reduce solution, faster than 99.31%, less than 93.71%
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/292608/JavaScript-reduce-solution-faster-than-99.31-less-than-93.71
const maxProfit = (prices) => {
  let diff = 0;
  if (prices.length > 0) {
    prices.reduce((acc, next) => {
      if (next < acc) {
        return next;
      } else {
        if (next - acc > diff) {
          diff = next - acc;
        }
        return acc;
      }
    });
  }
  return diff;
};

// Test cases
// [5,2,3,7,1,5,3,6,6,4]
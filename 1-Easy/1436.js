// 1436. Destination City

const { delete } = require("superagent");

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.


// Example 1:
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.
// Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:
// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".

// Example 3:
// Input: paths = [["A","Z"]]
// Output: "Z"


// Constraints:
// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string[][]} paths
// @return {string}

const destCity = paths => {
  let departure = {};
  let arrival = {};

  for (i = 0; i < paths.length; i++) {
    !(arrival[paths[i][0]]) ? departure[paths[i][0]] = 1 : delete arrival[paths[i][0]];
    !(departure[paths[i][1]]) ? arrival[paths[i][1]] = 1 : delete departure[paths[i][1]];
  }

  return Object.keys(arrival)[0];
};


// Javascript - easy to understand and 93% faster
// https://leetcode.com/problems/destination-city/discuss/738353/Javascript-easy-to-understand-and-93-faster
const destCity = paths => {
  const arrivals = paths.map(a => a[0]);
  const destinations =  paths.map(a => a[1]);
  
  return destinations.filter(d => arrivals.indexOf(d) === -1).join('');
};


// JavaScript Solution 100% 100%
// https://leetcode.com/problems/destination-city/discuss/610731/JavaScript-Solution-100-100
const destCity = paths => {
  const seen = new Set(paths.map(el => el[0]))
  
  for (let i of paths) {
    if(!seen.has(i[1])) return i[1];
  }
  
  return "";
};

// Test Cases
// [["London","New York"],["Lima","Sao Paulo"],["New York","Lima"]]
// [["B","C"],["D","B"],["C","A"]]
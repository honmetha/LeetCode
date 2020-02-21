// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.


/***********************************************************************
 *  Answer
 **********************************************************************/


let address = "1.1.1.1";
let address2 = "255.100.50.0";
let periodIndex = [];
let output;

for (i = 0; i < address.length; i++) {
  if (address.charAt(i) === ".") {
    periodIndex.push(i);
  }
}

for (i = 0; i < periodIndex.length; i++) {
  output = address.substring(0, periodIndex[i]) + "[" + address.substring(periodIndex[i]);
  console.log(output);
}
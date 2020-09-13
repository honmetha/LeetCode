// 204. Count Primes

// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} n
// @return {number}

// First attempt - this solution gets slow when n > 1,000,000
const countPrimes = n => {
  if (n <= 2) return 0;

  let primeNumbers = [2];
  
  for (i = 3; i < n; i++) {
    let isPrimeNumber = true;

    for (j = 0; j < primeNumbers.length; j++) {
      if (primeNumbers[j] > i / 2) break;
      if (i % primeNumbers[j] === 0) {
        isPrimeNumber = false;
        break;
      }
    }

    if (isPrimeNumber) primeNumbers.push(i);
  }
  
  return primeNumbers.length;
};

// Faster
const countPrimes = n => {
  let primeNumbers = Array.from(Array(n).keys());
  const lastPrime = primeNumbers[primeNumbers.length - 1];

  for (let i = 2; i < primeNumbers.length; i++) {
    if (primeNumbers[i]) {
      for (let j = 2; primeNumbers[i] * j <= lastPrime; j++) {
        primeNumbers[primeNumbers[i] * j] = false;
      }
    }
  }

  primeNumbers = primeNumbers.slice(2);

  let count = 0;
  for (let k = 0; k < primeNumbers.length; k++) {
    if (primeNumbers[k]) count++;
  }

  return count;
};

// Test cases
// 0
// 1
// 2
// 5
// 10
// 100
// 255
// 4567
// 23456
// 567893
// 1000000
// 5000000
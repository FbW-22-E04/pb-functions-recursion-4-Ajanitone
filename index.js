// Write your code here:

// # Recursion

// #### Find the nth Fibonacci number

// **complete the code in `index.js`**

// - Create a function named `fibonacci`
// - The function should take a number as argument
// - The function should return the sequence of fibonacci numbers based on the passed number
// - The result should be returned as an array

// - Note: The <a href="https://en.wikipedia.org/wiki/Fibonacci_number" target="_blank">Fibonacci Sequence</a> is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function fibonacci(num) {
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else {
    let s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]

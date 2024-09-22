// 1. Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("Hello world"));  // Output: "dlrow olleH"
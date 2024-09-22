// 4. Write a function that removes all spaces from a given string.

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }
  
  console.log(removeSpaces("Hello World! This has spaces."));  // Output: "HelloWorld!Thishasspaces."
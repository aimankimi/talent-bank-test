// 2. Write a function that removes duplicate values from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1]));  // Output: [1, 2, 3, 4]
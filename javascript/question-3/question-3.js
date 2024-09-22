// 3. Write a function that generates a random integer between two given values.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomInt(10, 20));  // Output: Random integer between 10 and 20 (inclusive)
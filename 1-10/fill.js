const numbers = [1, 2, 3, 4, 5];
numbers.fill(0); // Fills the entire array with 0
console.log(numbers); // Output: [0, 0, 0, 0, 0]

//Example 2: Fill a portion of an array with a specific value
const fruits = ["apple", "banana", "cherry", "date"];
fruits.fill("grape", 1, 3); // Fills from index 1 (inclusive) to index 3 (exclusive)
console.log(fruits); // Output: ["apple", "grape", "grape", "date"]

// Write a JavaScript function that takes an array of test scores and uses the `every` method to check if all the scores are passing (scores greater than or equal to 60). Return `true` if all scores are passing, otherwise `false`.

const arr = [60, 70, 80, 90];
const pass = arr.every((i) => i >= 60);
if (pass) {
  console.log("All are passed");
} else {
  console.log("Some of them failed");
}

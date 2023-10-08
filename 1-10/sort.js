const arr = [23, 12, 56, 45, 78, 47];

// Write a JavaScript function that takes an array of numbers and uses the `sort` method to sort the numbers in ascending order. Return the sorted array.
// Sort for ascending order
arr.sort((a, b) => a - b);
console.log(arr);

// Sort for Descending order
arr.sort((a, b) => b - a);
console.log(arr);

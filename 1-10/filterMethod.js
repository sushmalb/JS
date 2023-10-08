const scores = [20, 90, 140, 50];
const filteredscores = scores.filter((i) => i >= 60);
console.log(filteredscores);
// in an array containing values between 1 to 20 ,create another array which contain only the multiple of 4 out of the original array

var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

var multipleOfFour = arr.filter((i) => i % 4 == 0);
console.log(multipleOfFour);

var multipleByTwo = multipleOfFour.map((i) => i * i);
console.log(multipleByTwo);

// Shortcut
//const result = arr1.filter((num) => num % 4 === 0).map((num) => num * 2);

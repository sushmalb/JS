const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const typeOfJonasArray = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  //typeOfJonasArray[i] = typeof jonasArray[i];
  typeOfJonasArray.push(typeof jonasArray[i]);
}
console.log(typeOfJonasArray);

// ========================================================

const yearOfBirths = [1991, 1983, 1990, 1976, 1977];
const ages = [];
for (let i = 0; i < yearOfBirths.length; i++) {
  ages.push(2023 - yearOfBirths[i]);
}

console.log(ages);

// =================================================
//CONTINUE AND BREAK
//continue stops the current iteration if the consition fails

// only print string Data type
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("====================");
// break when number is found
console.log("break when number is found!!");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

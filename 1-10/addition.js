// Using normal functions
function add(a, b) {
  return a + b;
}

var result = add(10, 5);
console.log(result);

// Using arrow functions

var sum = (a, b) => a + b;

console.log(sum(10, 20));

// Arrow functions using single arguments
let square = (n) => n * 2; // () can be omitted
console.log(square(2));

//If there are no arguments, parentheses are empty, but they must be present
let sayHi = () => console.log("Hello");
sayHi();

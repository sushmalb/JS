var test = function sample(x = 50, y = 10) {
  total = x + y;
  return total;
};
console.log(test(20, 50));

function display(a, b) {
  console.log("The program will display su of two numbers");
  return test(a, b);
}

console.log(display(20, 20));

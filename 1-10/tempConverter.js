// const celsius = [20, 40, 100, 150];
// const fahreneit = celsius.map((c) => (c * 9) / 5 + 32);
// console.log(fahreneit);

//ReDUCE Fn Syntax
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

const expense = [20, 30, 40, 50];
//calculate the prooduct of All the elements of the array expense
const total = expense.reduce((i, sum) => sum + i, 0);
console.log(total);

//Calculate Total Expenses
var expenseArr = [1000, 2000, 3000, 4000];

let amountSpent = expenseArr.reduce((sum, i) => sum * i, 0);
console.log(amountSpent);

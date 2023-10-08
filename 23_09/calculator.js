alert("Press 1->add, 2->sub, 3->multiplication, 4-> Division");
var ch = parseInt(prompt("Enter your choice !!"));
var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("enter the second number"));

while
if (ch == 1) {
  alert("Sum of 2 numbers is " + (num1 + num2));
} else if (ch == 2) {
  alert("Difference of 2 numbers is" + (num1 - num2));
} else if (ch == 3) {
  alert("product of 2 numbers is" + num1 * num2);
} else if (ch == 4) {
  alert("Division of 2 numbers is" + num1 / num2);
} else {
  alert("invalid choice!!");
}

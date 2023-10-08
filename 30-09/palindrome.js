//palindrome checker

var str1 = "madams";
/* var arr1 = str1.split('');

//reverse the array and join it to make a string again

var reversed = [];
for (let i = arr1.length - 1; i >= 0; i--) {
    reversed.push(arr1[i]);
} */
//built in method using the . operator we differniate the methods
var str2 = str1.split("").reverse().join("");
//var str2 = reversed.join('')
if (str1 == str2) {
  console.log("its palindrom");
} else {
  console.log("not palindrom");
}

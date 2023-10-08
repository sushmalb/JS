var numArr = [1, 2, 3, 4, 5, 6, 7];
var strArr = new Array("a", "b", "c", "d", "e", "f", "g", "h", "d");

for (var i of numArr) {
  console.log(i);
}

for (var i in numArr) {
  console.log(i);
}

numArr.push(100); // Adds to the end
numArr.unshift(-100); // Adds at thhe beg
numArr.pop(); // removes from the end
numArr.shift(); // removes from the beg

console.log(numArr);

//Converting arrays into strings
console.log(numArr.join());
console.log(numArr.join("-"));
console.log(numArr.join(""));

//Converting strings to array
console.log;
var str = "Convert this into an array";
console.log(str.split(" "));

//Combine two arrays
var combArr = numArr.concat(strArr);
console.log(combArr);

//Searching for an elem
console.log(strArr.indexOf("z"));
console.log(strArr.lastIndexOf("d"));

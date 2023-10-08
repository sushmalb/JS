const friends = ["sushma", "Snehal", "Prasad"];

//PUSH - adds to the back, returns the length of the array
console.log(friends.push("Sagar"));
console.log(friends);

//UNSHIFT - adds to the front, returns the length of the array
console.log(friends.unshift("Snehanki"));
console.log(friends);

//POP -removes from the end , returns the removed element
console.log(friends.pop());
console.log(friends);

//SHIFT
console.log(friends.shift());
console.log(friends);

//IndexOf , returns the index of the element , -1 if element is not found
console.log(friends.indexOf("Prasad"));

//Includes , gives true or false if the element is present or absent, checks with strict equality
console.log(friends.includes("Prasad"));
console.log(friends.includes("Snehanki"));

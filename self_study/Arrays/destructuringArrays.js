const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Modern array concepts : destructuring

const arr = [2, 3, 4];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// console.log(x, y, z);
// short cut for above and extracting all elems. Original array doesnt change
const [x, y, z] = arr;
console.log(x, y, z);

//showws first 2 element

let [first, second] = restaurant.categories;
console.log(first, second);

//To skip one elem
const [ondu, , third] = restaurant.categories;
console.log(ondu, third);

//Switching variables
[first, second] = [second, first];
console.log(first, second);

const [starterMenuAtIndex, mainMenuAtIndex] = restaurant.order(2, 0);
console.log(starterMenuAtIndex, mainMenuAtIndex);

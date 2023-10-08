// WHILE LOOP

// var i = 0;
// while (i <= 10) {
//   console.log(i);
// }

// DO-WHILE
// var i = 5;
// do {
//   i++;
//   console.log(i);
// } while (i <= 10);

//FOR LOOP
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// FIB series
// var arr = [0, 1];

for (var i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 7 == 0) {
    console.log("Multiple of both");
  } else if (i % 3 == 0) {
    console.log("is a multiple of 3");
  } else if (i % 7 == 0) {
    console.log("is a multiple of 7");
  } else {
    console.log(i);
  }
}

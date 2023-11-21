const fs = require("fs");

let data = `
 This is some dummy data.

`;

fs.writeFile("dummy.txt", data, (err) => {
  if (err) {
    console.log(err);
  }
});

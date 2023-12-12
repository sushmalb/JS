const fs = require("fs");

const text = ` This is some dumy text`;

// Writing to a file
fs.writeFileSync("./self study", text);
console.log("File written successfully");

// Reading from a file

const readFile = fs.readFileSync("./self study", "utf-8");
console.log(readFile);

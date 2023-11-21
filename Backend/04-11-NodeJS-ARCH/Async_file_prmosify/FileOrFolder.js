const fs = require("fs");

function isFileOrFolder(path) {
  fs.stat(path, (err, stat) => {
    if (err) {
      console.error(err);
      return;
    }

    if (stat.isDirectory()) {
      console.log("This is a folder");
    }

    if (stat.isFile()) {
      console.log("This is a file");
    }
  });
}

// Usage example:
isFileOrFolder("./file1.txt");

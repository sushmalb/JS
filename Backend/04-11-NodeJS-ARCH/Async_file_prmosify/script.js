const fs = require("fs"); // fs is inbuilt file system which you have to require

// fs.readFile("./txt/file.txt", "utf-8", (err, data) => {
//   if (err) console.log("ERROR!");
//   console.log(data);
// });

function readingFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${filepath}`, "utf-8", (err, data) => {
      if (err) {
        console.log("ERROR!");
        //reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function handlePRomise() {
  const f1 = await readingFile("./file1.txt");
  const f2 = await readingFile("./file2.txt");
  console.log(f1, f2);
}

handlePRomise();

const fs = require("fs");
const http = require("http");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const jsonData = JSON.parse(data);
// console.log(json);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  data;

  if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on port 3000");
});

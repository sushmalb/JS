const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to server on port 3000");
});

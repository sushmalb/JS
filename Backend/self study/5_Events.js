const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();

//ES6 way
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("New sale happened !!!");
});

myEmitter.on("newSale", (stock) => {
  console.log(`New sale happened and ${stock} is now available`);
});

myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("request received !!");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.on("closed", (req, res) => {
  console.log("Request received");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Connected");
});

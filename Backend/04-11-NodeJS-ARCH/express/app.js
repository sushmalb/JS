const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "This is the description of Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "This is the description of Product 2.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 9.99,
    description: "This is the description of Product 3.",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    description: "This is the description of Product 4.",
  },
  {
    id: 5,
    name: "Product 5",
    price: 39.99,
    description: "This is the description of Product 5.",
  },
];

console.log(products);

const express = require("express");
const app = express();

//app.methodName("url", function(req,res))
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hi", function (req, res) {
  res.send("<hi>Hi How are you</h1> ");
});

app.get("/products", function (req, res) {
  res.send(products); // Use res.json() to send JSON data
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

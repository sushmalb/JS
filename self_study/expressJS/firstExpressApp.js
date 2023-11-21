const express = require("express");
const app = express();
const port = 3000;

// U can rturn a string or JSOn object using send
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  const name = {
    name: "sushma",
    lastName: "B",
  };

  res.send(name);
});

// Dynamic Routing simple
app.get("/users/:id", (req, res) => {
  res.send("User number is:" + req.params.id);
});

//Dynamic Routing with multiple params
app.get("/users/:id/:city/:state", (req, res) => {
  res.send(
    "User number is:" +
      req.params.id +
      "from " +
      req.params.city +
      " state is:" +
      req.params.state
  );
});

// Routing using regular Expressions
app.get("/search/:key[0-9]{4}", (req, res) => {
  res.send("Key is:" + req.params.key);
});

app.get("/search/users/:keyx[a-zA-Z]{4}", (req, res) => {
  res.send("user is:" + req.params.key);
});

//Wildcard routes
app.get("*", (req, res) => {
  res.send("URL  not found !!!");
});
app.listen(port);

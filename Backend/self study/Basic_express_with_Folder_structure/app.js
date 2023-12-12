const express = require("express");
const router = require("./UserRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("From root ");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

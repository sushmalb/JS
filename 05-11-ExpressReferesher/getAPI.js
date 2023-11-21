const express = require("express");
const app = express();
const port = 3000;
const tasks = [
  {
    id: 1,
    desc: "task 1",
  },
  {
    id: 2,
    desc: "task 2",
  },
  {
    id: 3,
    desc: "task 3",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send(task);
});

app.get("/tasks/:id", (req, res) => {
  id = req.params.id;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      res.send(tasks[i]);
    }
  }
});

app.post("/task", (req, res) => {
  task = req.body;
  tasks.push(task);
  res.send(tasks);
});

app.put("/updatetasks/:id", (req, res) => {
  desc = req.body.description;
  const id = parseInt(req.params.id);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].description = desc;
      res.send(tasks[i]);
    }
  }
});

app.listen(port);

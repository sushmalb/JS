const express = require("express");
const app = express();
const port = 3000;

// Users
const users = [
  { id: 1, userName: "John", password: "password", role: "student" },
  { id: 2, userName: "Alex", password: "password1", role: "student" },
  { id: 3, userName: "Nancy", password: "password2", role: "admin" },
];

// Questions
const quizQuestions = [
  {
    id: 1,

    question: "What is the capital of France?",

    options: ["Paris", "London", "Berlin", "Madrid"],

    correctOption: 0,
  },

  {
    id: 2,

    question: "Which planet is known as the Red Planet?",

    options: ["Mars", "Venus", "Jupiter", "Mercury"],

    correctOption: 0,
  },
];

// let allQuestions = [];

// async function getAllQuestions() {
//   const response = await fetch("http://localhost:3000/questions");
//   const data = await response.json();
//   console.log(data);
// }
// getAllQuestions();
// Endpoints
app.post("/signup/student", function (req, res) {
  res.send("Student is signed!!");
});

app.post("/login/student", function (req, res) {
  res.send("Student logged in!!");
});

app.post("/signup/admin", function (req, res) {
  res.send("Admin Signed in!!");
});

app.post("/login/admin", function (req, res) {
  res.send("Admin logged in!!");
});

app.post("/questions/:id", function (req, res) {
  const qId = req.params.id;
  res.send("Questions added successfully!");
});

app.get("/questions", (req, res) => {
  res.send(quizQuestions);
});

app.listen(port, function () {
  console.log("listening on port 3000");
});

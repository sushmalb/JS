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

// Endpoints
app.post("/signup", function (req, res) {});

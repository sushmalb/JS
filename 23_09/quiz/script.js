const questions = [
  {
    question: "5 + 6",
    answer: 11,
  },
  {
    question: "8 + 9",
    answer: 17,
  },
  {
    question: "9 * 15",
    answer: 135,
  },
];
var score = 0;
console.log("Welcome to Quiz");

for (let i = 0; i < questions.length; i++) {
  const que = questions[i];
  let input = console.log(que.question);
  if (input == que.answer) {
    console.log("Answer is correct");
    score += 1;
  } else {
    console.log("Answer is not correct");
  }
}

console.log(`Score is ${score}`);

#!/usr/bin/env node

import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

function playRound() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const yourAnswer = readlineSync.question("Your answer: ");

    const corAnswer = () => {
      if (yourAnswer === "yes") {
        return "no";
      }
      if (yourAnswer === "no") {
        return "yes";
      }
      if (yourAnswer !== "yes"
        && yourAnswer !== "no"
        && randomNumber % 2 !== 0) {
        return "no";
      }
      return "yes";
    };
    const notCorrectAnswer = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${corAnswer()}'.
  Let's try again, ${userName}!`;

    if (
      (randomNumber % 2 === 0 && yourAnswer === "yes")
      || (randomNumber % 2 !== 0 && yourAnswer === "no")
    ) {
      console.log("Correct!");
    } else {
      console.log(notCorrectAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
playRound();

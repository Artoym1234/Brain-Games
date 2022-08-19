import readlineSync from "readline-sync";

export function randomNumber(base) {
  return Math.round(Math.random() * base);
}
console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

export function calc() {
  const exercise = "What is the result of the expression?";
  console.log(exercise);
}

export const taskCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber(100);
    const number2 = randomNumber(100);
    const signs = ["+", "-", "*"];
    const sign = signs[randomNumber(2)];
    const questions = `${number1} ${sign} ${number2}`;
    console.log(`Question: ${questions}`);
    const answer = readlineSync.question("Your answer: ");

    const rezult1 = () => {
      let result = 0;
      switch (sign) {
        case "+":
          result = number1 + number2;
          break;
        case "-":
          result = number1 - number2;
          break;
        case "*":
          result = number1 * number2;
          break;
        default:
          result = null;
      }
      return result;
    };

    const answerNum = Number(answer);
    if (rezult1() === answerNum) {
      console.log("Correct!");
    } else {
      console.log(`"${answerNum}" is wrong answer ;(. Correct answer was "${rezult1()}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

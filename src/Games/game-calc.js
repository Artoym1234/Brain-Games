import globalGame, { randomNumber } from '../index.js';

function playGameCalc() {
  const exercise = 'What is the result of the expression?';
  function calc() {
    const number1 = randomNumber(100);
    const number2 = randomNumber(100);
    const signs = ['+', '-', '*'];
    const sign = signs[randomNumber(2)];
    const questions = `${number1} ${sign} ${number2}`;

    let result = 0;
    switch (sign) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }
    return [questions, String(result)];
  }
  globalGame(exercise, calc);
}
export default playGameCalc;

import run from '../index.js';
import getRandomNumber from './utils.js';

function generateData() {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumber(2)];
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

function playGameCalc() {
  const descriptionGame = 'What is the result of the expression?';
  run(descriptionGame, generateData);
}

export default playGameCalc;

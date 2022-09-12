import run from '../index.js';
import getRandomNumber, { getRandomIndex } from '../utils.js';

const signs = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const min = 0;
const max = 100;

const calculate = (number1, number2, sign) => {
  let result = '';
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
      throw new Error(`Unknown operator: '${sign}'!`);
  }
  return result;
};

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const sign = signs[getRandomIndex(signs)];
  const questions = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, sign));
  return [questions, correctAnswer];
};

const playCalc = () => run(description, generateRound);

export default playCalc;

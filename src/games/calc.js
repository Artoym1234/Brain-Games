import run from '../index.js';
import getRandomNumber from '../utils.js';

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
      result = null;
  }
  return result;
};

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const questions = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, sign));
  return [questions, correctAnswer];
};

const playCalc = () => run(description, generateRound);

export default playCalc;

import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const questions = `${number1} ${number2}`;
  let x = number1;
  let y = number2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  const correctAnswer = String(x);
  return [questions, correctAnswer];
};

const playGcd = () => run(description, generateRound);

export default playGcd;

import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const questions = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [questions, correctAnswer];
};

const playGcd = () => run(description, generateRound);

export default playGcd;

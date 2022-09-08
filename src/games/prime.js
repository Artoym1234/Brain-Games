import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isVerifyPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = isVerifyPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => run(description, generateRound);

export default playPrime;

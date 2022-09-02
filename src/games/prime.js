import run from '../index.js';
import getRandomNumber from './utils.js';

const isVerifyPrimeNum = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateData = () => {
  const question = getRandomNumber(100);
  const answer = isVerifyPrimeNum(question) ? 'yes' : 'no';
  return [question, answer];
};

function playGamePrime() {
  const descriptionGame = '"yes" if given number is prime. Otherwise answer "no".';
  run(descriptionGame, generateData);
}
export default playGamePrime;

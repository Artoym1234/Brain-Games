import run from '../index.js';
import getRandomNumber from './utils.js';

function generateData() {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const questions = `${number1} ${number2}`;
  let x = number1;
  let y = number2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return [questions, String(x)];
}

function playGameGcd() {
  const descriptionGame = 'Find the greatest common divisor of given numbers.';
  run(descriptionGame, generateData);
}

export default playGameGcd;

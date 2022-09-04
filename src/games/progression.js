import run from '../index.js';
import getRandomNumber from './utils.js';

function makeProgressia() {
  const arr1 = [];
  const randomProgressia = getRandomNumber(100);
  const randomStep = Math.floor(Math.random() * (5 - 1)) + 1;
  for (let i = 0; i < randomStep * 10; i += randomStep) {
    arr1.push(randomProgressia + i);
  }
  return arr1;
}

function generateData() {
  const randomCloseNumber = Math.round(Math.random() * (9 - 0)) + 0;
  const arr2 = makeProgressia();
  const answer = arr2[randomCloseNumber];
  arr2[randomCloseNumber] = '..';
  return [arr2.join(' '), String(answer)];
}

function playGameProgression() {
  const descriptionGame = 'What number is missing in the progression?';
  run(descriptionGame, generateData);
}

export default playGameProgression;

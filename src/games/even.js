import run from '../index.js';
import getRandomNumber from './utils.js';

function generateData() {
  const question = getRandomNumber(100);
  let rezult = '';
  if (question % 2 === 0) {
    rezult = 'yes';
  } if (question % 2 !== 0) {
    rezult = 'no';
  }
  return [question, rezult];
}

function playGameEven() {
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(descriptionGame, generateData);
}
export default playGameEven;

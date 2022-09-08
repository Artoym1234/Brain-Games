import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const generateRound = () => {
  const question = getRandomNumber(min, max);
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } if (question % 2 !== 0) {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const playEven = () => run(description, generateRound);

export default playEven;

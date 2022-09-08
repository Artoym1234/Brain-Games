import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const min = 1;
const max = 100;
const minStep = 1;
const maxStep = 5;
const maxLength = 11;
const minRange = 0;

const makeProgressia = (firstNum, step, lengthProgression) => {
  const progression = [];
  for (let i = 1; i < lengthProgression; i += step) {
    progression.push(firstNum + i);
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(min, max);
  const step = getRandomNumber(minStep, maxStep);
  const lengthProgression = step * maxLength;
  const progression = makeProgressia(firstNum, step, lengthProgression);
  const randomCloseNum = getRandomNumber(minRange, progression.length - 1);
  const correctAnswer = String(progression[randomCloseNum]);
  progression[randomCloseNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgression = () => run(description, generateRound);

export default playProgression;

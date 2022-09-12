import run from '../index.js';
import getRandomNumber, { getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 100;
const minStep = 1;
const maxStep = 5;

const createProgression = (first, step, length) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const limitLength = 10;
  const progression = createProgression(firstNum, step, limitLength);
  const indexHiddenNum = getRandomIndex(progression);
  const correctAnswer = String(progression[indexHiddenNum]);
  progression[indexHiddenNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgression = () => run(description, generateRound);

export default playProgression;

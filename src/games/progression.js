import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 100;
const minStep = 1;
const maxStep = 5;
const limitLength = 10;

const createProgression = (first, step, length) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const generateRound = () => {
  const first = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const progression = createProgression(first, step, limitLength);
  const indexHidden = getRandomIndex(progression);
  const correctAnswer = String(progression[indexHidden]);
  progression[indexHidden] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgression = () => {
  run(description, generateRound);
};
export default playProgression;

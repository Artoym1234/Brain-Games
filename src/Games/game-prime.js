import globalGames, { randomNumber } from '../index.js';

function playGamePrime() {
  const exercise = '"yes" if given number is prime. Otherwise answer "no".';

  const isPrimeNumber = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const prime = () => {
    const question = randomNumber(100);
    const answer = isPrimeNumber(question) ? 'yes' : 'no';
    return [question, answer];
  };

  globalGames(exercise, prime);
}
export default playGamePrime;

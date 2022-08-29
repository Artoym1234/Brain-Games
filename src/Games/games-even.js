import globalGames, { randomNumber } from '../index.js';

function playGameEven() {
  const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

  function even() {
    const randomQuestion = randomNumber(100);
    let rezult = '';
    if (randomQuestion % 2 === 0) {
      rezult = 'yes';
    } if (randomQuestion % 2 !== 0) {
      rezult = 'no';
    }
    return [randomQuestion, rezult];
  }
  globalGames(exercise, even);
}
export default playGameEven;

import readlineSync from 'readline-sync';

export function randomNumber(base) {
  return Math.round(Math.random() * base);
}

const globalGames = (nameGame, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(nameGame);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = game();
    console.log('Question:', questionAndResult[0]);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = questionAndResult[1];

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default globalGames;

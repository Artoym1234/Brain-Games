import globalGame, { randomNumber } from "../index.js";

function playGameGcd() {
  const exercise = "Find the greatest common divisor of given numbers.";

  function gcd() {
    const number1 = randomNumber(100);
    const number2 = randomNumber(100);
    const questions = `${number1}  ${number2}`;
    let x = Math.abs(number1);
    let y = Math.abs(number2);
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return [questions, String(x)];
  }
  globalGame(exercise, gcd);
}
export default playGameGcd;

import globalGame, { randomNumber } from "../index.js";

function playGameProgression() {
  const exercise = "What number is missing in the progression?";

  function progressia() {
    const arr1 = [];
    const randomProgressia = randomNumber(100);
    const randomStep = Math.floor(Math.random() * (5 - 1)) + 1;
    for (let i = 0; i < randomStep * 10; i += randomStep) {
      arr1.push(randomProgressia + i);
    }
    return arr1;
  }

  function closeNumberprogressia() {
    const randomCloseNumber = Math.round(Math.random() * (9 - 0)) + 0;
    const arr2 = progressia();
    const answer = arr2[randomCloseNumber];
    arr2[randomCloseNumber] = "..";
    return [arr2.join(" "), String(answer)];
  }
  globalGame(exercise, closeNumberprogressia);
}
export default playGameProgression;

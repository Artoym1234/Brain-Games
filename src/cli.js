import readlineSync from "readline-sync";

function greetings() {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
}
export default greetings;

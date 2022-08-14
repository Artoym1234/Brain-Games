import readlineSync from "readline-sync";
function greetings() {
  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
}
export default greetings;

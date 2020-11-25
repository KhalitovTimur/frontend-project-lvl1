import readlineSync from "readline-sync";
import randomInteger from "../random.js";
import myGame from "../index.js";

const checkPrimeGame = (num) => {
  if (num === 0) {
    return "no";
  }
  if (num === 1) {
    return "yes";
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return "no";
    }
  }
  return "yes";
};
const description =
  'Answer "yes" if given number is prime. Otherwise answer "no"';
const mindGame = (checkCorrectAnswer, CongratulationsOnWinningTheGame) => {
  const minNumberForRandomGeneration = 2;
  const maxNumberForRandomGeneration = 100;
  for (let i = 0; i < 3; i += 1) {
    const randomElement = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );
    const answer = readlineSync.question(`Question: ${randomElement}: `);
    console.log(`Your answer: ${answer}`);
    const correctAnswer = checkPrimeGame(randomElement);
    if (checkCorrectAnswer(answer, correctAnswer) === false) {
      return;
    }
    console.log(CongratulationsOnWinningTheGame);
  }
};

export default myGame(description, mindGame);

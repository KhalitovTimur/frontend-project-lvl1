import readlineSync from "readline-sync";
import myGame from "../index.js";
import randomInteger from "../random.js";

const calcNod = (firstNumber, secondNumber) => {
  let result;
  for (let i = 1; i < 9; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};
const description = "Find the greatest common divisor of given numbers";

const mindGame = (checkCorrectAnswer, CongratulationsOnWinningTheGame) => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 100;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberFirst = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );
    const randomNumberSecond = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );
    const answer = readlineSync.question(
      `Question: ${randomNumberSecond} ${randomNumberFirst}: `
    );
    console.log(`Your answer: ${answer}`);
    const correctAnswer = calcNod(randomNumberSecond, randomNumberFirst);
    if (checkCorrectAnswer(answer, correctAnswer) === false) {
      return;
    }
    console.log(CongratulationsOnWinningTheGame);
  }
};

export default myGame(description, mindGame);

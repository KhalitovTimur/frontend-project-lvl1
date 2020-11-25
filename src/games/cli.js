import readlineSync from "readline-sync";
import randomInteger from "../random.js";
import myGame from "../index.js";

const evenGame = (randomElement) => {
  if (randomElement % 2 === 0) {
    return "yes";
  }
  return "no";
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const mindGame = (checkCorrectAnswer, CongratulationsOnWinningTheGame) => {
  const minNumberForRandomGeneration = 2;
  const maxNumberForRandomGeneration = 20;
  for (let i = 0; i < 3; i += 1) {
    const randomElement = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );

    const answer = readlineSync.question(`Question: ${randomElement}: `);
    const correctAnswer = evenGame(randomElement);
    if (answer === correctAnswer) {
      console.log(correctAnswer);
    }
    if (checkCorrectAnswer(answer, correctAnswer) === false) {
      return;
    }
    console.log(CongratulationsOnWinningTheGame);
  }
};

export default myGame(description, mindGame);

import readlineSync from "readline-sync";
import randomInteger from "../random.js";
import myGame from "../index.js";

const description = "What is the result of the expression?";

const mindGame = (checkCorrectAnswer, CongratulationsOnWinningTheGame) => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 100;
  const operators = ["+", "-", "*"];
  const minNumberForOperator = 0;
  const maxNumberForOperator = operators.length - 1;
  for (let i = 0; i < 3; i += 1) {
    const randomElement =
      operators[randomInteger(minNumberForOperator, maxNumberForOperator)];
    const randomNumberFirst = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );
    const randomNumberSecond = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration
    );
    const answer = readlineSync.question(
      `Question: ${randomNumberSecond} ${randomElement} ${randomNumberFirst}: `
    );
    console.log(`Your answer: ${answer}`);
    let correctAnswer;
    switch (randomElement) {
      case "+":
        correctAnswer = Number(randomNumberSecond) + Number(randomNumberFirst);
        console.log(correctAnswer);
        break;
      case "-":
        correctAnswer = Number(randomNumberSecond) - Number(randomNumberFirst);
        break;
      case "*":
        correctAnswer = Number(randomNumberSecond) * Number(randomNumberFirst);
        break;
      default:
    }
    if (checkCorrectAnswer(answer, correctAnswer) === false) {
      return;
    }
  }
  console.log(CongratulationsOnWinningTheGame);
};
export default myGame(description, mindGame);

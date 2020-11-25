import readlineSync from "readline-sync";

const myGame = (description, mindGame) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name?:  ");
  console.log(`Hello, ${name}`);
  console.log(description);
  const checkCorrectAnswer = (answer, correctAnswer) => {
    if (answer === String(correctAnswer)) {
      console.log("Correct!");
    } else if (answer !== String(correctAnswer)) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`
      );
      console.log(`Let's try again, ${name}`);
      return false;
    }
  };
  const CongratulationsOnWinningTheGame = `Congratulations, ${name}`;
  mindGame(checkCorrectAnswer, CongratulationsOnWinningTheGame);
};
export default myGame;

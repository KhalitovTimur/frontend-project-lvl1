import readlineSync from "readline-sync";
import randomInteger from "../random.js";
import myGame from "../index.js";

const listOfPrimeNumbers = () => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 5;
  const randomNumberFirst = randomInteger(
    minNumberForRandomGeneration,
    maxNumberForRandomGeneration
  );
  const randomNumberSecond = randomInteger(
    minNumberForRandomGeneration,
    maxNumberForRandomGeneration
  );
  const limitOfTheListOfPrimeNumbers =
    randomNumberFirst + 10 * randomNumberSecond;
  const arrayOfListOfPrimeNumbers = [];
  for (
    let i = randomNumberFirst;
    i < limitOfTheListOfPrimeNumbers;
    i += randomNumberSecond
  ) {
    const randomNumberString = String(i);
    arrayOfListOfPrimeNumbers.push(randomNumberString);
  }
  arrayOfListOfPrimeNumbers.splice(randomNumberFirst, 1, "..");
  return arrayOfListOfPrimeNumbers.join(" ");
};
const description = "What number is missing in the progression?";

const mindGame = (checkCorrectAnswer, CongratulationsOnWinningTheGame) => {
  for (let i = 0; i < 3; i += 1) {
    const listOfPrimeNum = listOfPrimeNumbers();
    const answer = readlineSync.question(`Question: ${listOfPrimeNum}: `);
    console.log(`Your answer: ${answer}`);
    const theListOfPrimeNumbersOfPartitionsPerArray = listOfPrimeNum.split(" ");
    const returnsTheIndexOfTheSearchedElement = theListOfPrimeNumbersOfPartitionsPerArray.indexOf(
      ".."
    );
    const firstIndex =
      theListOfPrimeNumbersOfPartitionsPerArray[
        returnsTheIndexOfTheSearchedElement + 1
      ];
    const secondIndex =
      theListOfPrimeNumbersOfPartitionsPerArray[
        returnsTheIndexOfTheSearchedElement + 2
      ];
    const theDifferenceOfIndices = Number(firstIndex) - Number(secondIndex);
    const correctAnswer = Number(firstIndex) + Number(theDifferenceOfIndices);

    if (checkCorrectAnswer(answer, correctAnswer) === false) {
      return;
    }
    console.log(CongratulationsOnWinningTheGame);
  }
};

export default myGame(description, mindGame);

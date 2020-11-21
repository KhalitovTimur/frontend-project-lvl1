import promptly from 'promptly';
import randomInteger from '../random.js';
import myGame from '../index.js';

const progressionGame = () => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 5;
  const randomNumberFirst = randomInteger(
    minNumberForRandomGeneration,
    maxNumberForRandomGeneration,
  );
  const randomNumberSecond = randomInteger(
    minNumberForRandomGeneration,
    maxNumberForRandomGeneration,
  );
  const limit = randomNumberFirst + 10 * randomNumberSecond;
  const arithmeticProgression = [];
  for (let i = randomNumberFirst; i < limit; i += randomNumberSecond) {
    const randomNumberString = String(i);
    // const array = randomNumberString.split(' ');
    arithmeticProgression.push(randomNumberString);
  }
  arithmeticProgression.splice(randomNumberFirst, 1, '..');
  return arithmeticProgression.join(' ');
};
const description = 'What number is missing in the progression?';
const mindGame = async () => {
  for (let i = 0; i < 3; i += 1) {
    // const fu = getProgression();
    const answer = await promptly.prompt(`Question: ${progressionGame()}: `);
    console.log(`Your answer: ${answer}`);
    const restheLineSplitting = progressionGame().split(' ');
    const returnsTheIndexOfTheSearchedElement = restheLineSplitting.indexOf(
      '..',
    );
    const firstIndex = restheLineSplitting[returnsTheIndexOfTheSearchedElement - 1];
    const secondIndex = restheLineSplitting[returnsTheIndexOfTheSearchedElement - 2];
    const theDifferenceOfIndices = Number(firstIndex) - Number(secondIndex);
    console.log(theDifferenceOfIndices);
    const correctAnswer = Number(firstIndex) + Number(theDifferenceOfIndices);
    // if (Number(answer) === correctAnswer) {
    //   console.log('Correct!');
    // } else if (Number(answer) !== correctAnswer) {
    //   console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    //   console.log(`Let's try again, ${name}`);
    //   return;
    // }
  }
  console.log(`Congratulations, ${name}`);
};

myGame(description, mindGame);
export default myGame;

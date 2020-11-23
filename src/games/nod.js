import promptly from 'promptly';
import myGame from '../index.js';
import randomInteger from '../random.js';

const calcNod = (firstNumber, secondNumber) => {
  let result;
  for (let i = 1; i < 9; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};
const description = 'Find the greatest common divisor of given numbers';

const mindGame = async () => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 100;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberFirst = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration,
    );
    const randomNumberSecond = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration,
    );
    const answer = await promptly.prompt(
      `Question: ${randomNumberSecond} ${randomNumberFirst}: `,
    );
    console.log(`Your answer: ${answer}`);
    const corrctAnswer = calcNod(randomNumberSecond, randomNumberFirst);
    //   if (Number(answer) === corrctAnswer) {
    //     console.log('Correct!');
    //   } else if (Number(answer) !== corrctAnswer) {
    //     console.log(`${answer} is wrong answer ;(. Correct answer was ${corrctAnswer}`);
    //     console.log(`Let's try again, ${name}`);
    //     return;
    //   }
    // }
    // console.log(`Congratulations, ${name}`);
  }
};

myGame(description, mindGame);

export default myGame;

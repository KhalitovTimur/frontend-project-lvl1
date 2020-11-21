import promptly from 'promptly';
import randomInteger from '../random.js';
import myGame from '../index.js';

const checkPrimeGame = (num) => {
  if (num === 0) {
    return 'no';
  }
  if (num === 1) {
    return 'yes';
  }
  let result;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const mindGame = async () => {
  const minNumberForRandomGeneration = 2;
  const maxNumberForRandomGeneration = 100;
  for (let i = 0; i < 3; i += 1) {
    const randomElement = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration,
    );
    const answer = await promptly.prompt(`Question: ${randomElement}: `);
    console.log(`Your answer: ${answer}`);
    console.log(randomElement);
    // if (checkPrimeGame(randomElement) === answer) {
    //   console.log('Correct!');
    // } else {
    //   console.log(`${answer} is wrong answer ;(. Correct answer was ${checkPrime(randomElement)}`);
    //   console.log(`Let's try again, ${name}`);
    //   return;
    // }
  }
  console.log(`Congratulations, ${name}`);
};

myGame(description, mindGame);

export default myGame;

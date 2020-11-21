import promptly from 'promptly';
import randomInteger from '../random.js';
import myGame from '../index.js';

const description = 'What is the result of the expression?';

const mindGame = async () => {
  const minNumberForRandomGeneration = 1;
  const maxNumberForRandomGeneration = 100;
  const operators = ['+', '-', '*'];
  const minNumberForOperator = 0;
  const maxNumberForOperator = operators.length - 1;
  for (let i = 0; i < 3; i += 1) {
    const randomElement = operators[randomInteger(minNumberForOperator, maxNumberForOperator)];
    const randomNumberFirst = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration,
    );
    const randomNumberSecond = randomInteger(
      minNumberForRandomGeneration,
      maxNumberForRandomGeneration,
    );
    const answer = await promptly.prompt(
      `Question: ${randomNumberFirst} ${randomElement} ${randomNumberSecond}: `,
    );
    console.log(`Your answer: ${answer}`);
    let correctAnswer;
    switch (randomElement) {
      case '+':
        correctAnswer = Number(randomNumberSecond) + Number(randomNumberFirst);
        console.log(correctAnswer);
        break;
      case '-':
        correctAnswer = Number(randomNumberSecond) - Number(randomNumberFirst);
        break;
      case '*':
        correctAnswer = Number(randomNumberSecond) * Number(randomNumberFirst);
        console.log(correctAnswer);
        break;
      default:
    }
    // if (Number(answer) === correctAnswer) {
    //   console.log('Correct!');
    // } else if (Number(answer) !== correctAnswer) {
    //   console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    //   console.log(`Let's try again, ${name}`);
    //   return;
    // }
  }
};
myGame(description, mindGame);
export default myGame;

import promptly from 'promptly';
import randomInteger from '../random.js';
import myGame from '../index.js';

const description = 'What is the result of the expression?';

const func = async () => {
  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    const selfRandom = randomInteger(1, 100);
    const selfRandom1 = randomInteger(1, 100);
    const quest1 = await promptly.prompt(`Question: ${selfRandom1} ${randomElement} ${selfRandom}: `);
    console.log(`Your answer: ${quest1}`);
    let result;
    switch (randomElement) {
      case '+':
        result = Number(selfRandom1) + Number(selfRandom);
        console.log(result);
        break;
      case '-':
        result = Number(selfRandom1) - Number(selfRandom);
        break;
      case '*':
        result = Number(selfRandom1) * Number(selfRandom);
        console.log(result);
        break;
      default:
    }
    if (Number(quest1) === result) {
      console.log('Correct!');
    } else if (Number(quest1) !== result) {
      console.log(`${quest1} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
};
myGame(description, func);
export default myGame;

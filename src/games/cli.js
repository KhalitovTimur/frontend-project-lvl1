import promptly from 'promptly';
import randomInteger from '../random.js';
import myGame from '../index.js';


const evenGame = (randomElement) => {
  if (randomElement % 2 === 0) {
    return 'yes';
  } else {
    return 'no' ;
  }
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';


const mindGame = async () => {
const minNumberForRandomGeneration = 2;
const maxNumberForRandomGeneration = 20;
for (let i = 0; i < 3; i ++) {
  const randomElement = randomInteger(minNumberForRandomGeneration, maxNumberForRandomGeneration);
  
  const answer = await promptly.prompt(`Question: ${randomElement}: `);
  switch (answer) {
    case evenGame(randomElement) !== answer:
      console.log("'yes' is wrong answer");
      console.log(`Let's try again, ${name}`);
      return;
    case evenGame(randomElement) === answer:
      console.log('Correct!');
      break;
    default:
      console.log(`Let's try again, ${name}`);
      break;
  }
  const secondAnswer = await promptly.prompt('Question: 6: ');
  switch (secondAnswer) {
  case 'no':
    console.log("'yes' is wrong answer");
    console.log(`Let's try again, ${name}`);
    return;
    case 'yes':
      console.log('Correct!');
    break;
    default:
      console.log(`Let's try again, ${name}`);
      break;
  }
  const thirdAnswer = await promptly.prompt('Question: 7: ');
  switch (thirdAnswer) {
    case 'yes':
      console.log("'yes' is wrong answer");
      console.log(`Let's try again, ${name}`);
      return;
    case 'no':
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    break;
    default:
      console.log(`Let's try again, ${name}`);
    break;
  }
};

myGame(description, mindGame);
export default myGame;

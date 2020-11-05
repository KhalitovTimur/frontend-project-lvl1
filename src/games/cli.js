import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const quest1 = await promptly.prompt('Question: 15: ');
  switch (quest1) {
    case 'yes':
      console.log("'yes' is wrong answer");
      console.log(`Let's try again, ${name}`);
      return;
    case 'no':
      console.log('Correct!');
      break;
    default:
      console.log(`Let's try again, ${name}`);
      break;
  }
  const quest2 = await promptly.prompt('Question: 6: ');
  switch (quest2) {
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
  const quest3 = await promptly.prompt('Question: 7: ');
  switch (quest3) {
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

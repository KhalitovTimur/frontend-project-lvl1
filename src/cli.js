import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const quest = await promptly.prompt('Question: 15: ');
  if (quest === 'yes') {
    console.log("'yes' is wrong answer");
    console.log(`Let's try again, ${name}`);
    return;
  } if (quest === 'no') {
    console.log('Correct!');
  } else if (quest !== 'no' || quest !== 'yes') {
    console.log(`Let's try again, ${name}`);
    return;
  }
  const quest1 = await promptly.prompt('Question: 6: ');
  if (quest1 === 'no') {
    console.log("'yes' is wrong answer");
    console.log(`Let's try again, ${name}`);
    return;
  } if (quest1 === 'yes') {
    console.log('Correct!');
  } else if (quest1 !== 'no' || quest1 !== 'yes') {
    console.log(`Let's try again, ${name}`);
    return;
  }
  const quest2 = await promptly.prompt('Question: 7: ');
  if (quest === 'yes') {
    console.log("'yes' is wrong answer");
    console.log(`Let's try again, ${name}`);
  } else if (quest2 === 'no') {
    console.log('Correct!');
    console.log(`Congratulations, ${name}`);
  } else if (quest2 !== 'no' || quest2 !== 'yes') {
    console.log(`Let's try again, ${name}`);
  }
};

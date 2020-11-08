import promptly from 'promptly';

const createGreet = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
};

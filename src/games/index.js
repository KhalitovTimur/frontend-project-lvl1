import promptly from 'promptly';

const getGreeting = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
};
export default getGreeting;

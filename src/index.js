import promptly from 'promptly';

const myGame = async (description, func) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(description);
  func();
  
};
export default myGame;

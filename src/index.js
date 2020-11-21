import promptly from 'promptly';

const myGame = async (description, mindGame) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log(description);
  const dataGame = mindGame();
  if (Number(answer) === corectAnswer) {
    console.log('Correct!');
  } else if (Number(answer) !== corectAnswer) {
    console.log(
      `${answer} is wrong answer ;(. Correct answer was ${corectAnswer}`,
    );
    console.log(`Let's try again, ${name}`);
  }
};

export default myGame;

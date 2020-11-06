import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = ['+', '-', '*'];
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    const selfRandom = Math.floor(Math.random() * 101);
    const selfRandom1 = Math.floor(Math.random() * 101);
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

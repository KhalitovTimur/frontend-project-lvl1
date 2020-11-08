import promptly from 'promptly';

export const nod1 = (num, num1) => {
  let result;
  for (let i = 1; i < 9; i += 1) {
    if (num % i === 0 && num1 % i === 0) {
      result = i;
    }
  }
  return result;
};

export const getNod = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const selfRandom = Math.floor(Math.random() * 101);
    const selfRandom1 = Math.floor(Math.random() * 101);
    const quest1 = await promptly.prompt(`Question: ${selfRandom1} ${selfRandom}: `);
    console.log(`Your answer: ${quest1}`);
    const res = nod1(selfRandom1, selfRandom);
    if (Number(quest1) === res) {
      console.log('Correct!');
    } else if (Number(quest1) !== res) {
      console.log(`${quest1} is wrong answer ;(. Correct answer was ${res}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

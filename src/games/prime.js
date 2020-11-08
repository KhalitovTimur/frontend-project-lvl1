import promptly from 'promptly';

export const getPrime = (num) => {
  if (num === 0) {
    return 'no';
  } if (num === 1) {
    return 'yes';
  }
  let result;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const getGamePrime = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const selfRandom = Math.floor(Math.random() * 101);
    const quest1 = await promptly.prompt(`Question: ${selfRandom}: `);
    console.log(`Your answer: ${quest1}`);
    console.log(selfRandom);
    if (getPrime(selfRandom) === quest1) {
      console.log('Correct!');
    } else {
      console.log(`${quest1} is wrong answer ;(. Correct answer was ${getPrime(selfRandom)}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

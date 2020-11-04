import promptly from 'promptly';

export function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export const getProgression = () => {
  const a1 = randomInteger(2, 5);
  const d = randomInteger(1, 5);
  const limit = a1 + 10 * d;
  const res = [];
  for (let i = a1; i < limit; i += d) {
    const str = String(i);
    const array = str.split(' ');
    res.push(str);
  }
  res.splice(a1, 1, '..');
  const result = res.join(' ');
  return result;
};

export const myFunc = async () => {
  const name = await promptly.prompt('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const fu = getProgression();
    const quest1 = await promptly.prompt(`Question: ${fu}: `);
    console.log(`Your answer: ${quest1}`);
    const res = fu.split(' ');
    const element = res.indexOf('..');
    const index = res[element - 1];
    const index1 = res[element - 2];
    const result = Number(index) - Number(index1);
    console.log(result);
    const item = Number(index) + Number(result);
    if (Number(quest1) === item) {
      console.log('Correct!');
    } else if (Number(quest1) !== item) {
      console.log(`${quest1} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

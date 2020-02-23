import { gameStart } from '../index.js';

const randomiser = (min, max) => Math.floor(Math.random() * max) + min;

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGcdNum = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcdNum(num2, num1 % num2);
};

const data = () => {
  const firstNum = randomiser(min, max);
  const secondNum = randomiser(min, max);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getGcdNum(firstNum, secondNum)}`;

  return {
    question,
    correctAnswer,
  };
};

const brainGcd = () => {
  gameStart(descriptionOfGame, data);
};

export default brainGcd;

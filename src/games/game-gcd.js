import runEngine from '../index.js';
import genRandomNumber from '../utils.js';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const getGcdNum = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcdNum(num2, num1 % num2);
};

const genGameData = () => {
  const firstNum = genRandomNumber(min, max);
  const secondNum = genRandomNumber(min, max);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGcdNum(firstNum, secondNum));

  return {
    question,
    correctAnswer,
  };
};

const runBrainGcd = () => {
  runEngine(descriptionOfGame, genGameData);
};

export default runBrainGcd;

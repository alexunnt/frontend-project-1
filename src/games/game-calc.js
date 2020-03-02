import gameStart from '../index.js';
import genRandomNumber from '../utils.js';

const descriptionOfGame = 'What is the result of the expression?';
const operators = ['+', '-', '*', '%'];
const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a % b,
];
const min = 1;
const max = 100;

const genGameData = () => {
  const firstNum = genRandomNumber(min, max);
  const secondNum = genRandomNumber(min, max);
  const operatorIndex = genRandomNumber(0, operators.length - 1);

  const question = `${firstNum} ${operators[operatorIndex]} ${secondNum}`;
  const correctAnswer = `${operations[operatorIndex](firstNum, secondNum)}`;

  return {
    question,
    correctAnswer,
  };
};

const runBrainCalc = () => {
  gameStart(descriptionOfGame, genGameData);
};

export default runBrainCalc;

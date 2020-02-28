import gameStart from '../index.js';
import randomiser from '../utils.js';

const descriptionOfGame = 'What is the result of the expression?';
const operators = ['+', '-', '*', '/'];
const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];
const min = 1;
const max = 100;

const data = () => {
  const firstNum = randomiser(min, max);
  const secondNum = randomiser(min, max);
  const operatorNumber = randomiser(0, operators.length);

  const question = `${firstNum} ${operators[operatorNumber]} ${secondNum}`;
  const correctAnswer = `${operations[operatorNumber](firstNum, secondNum)}`;

  return {
    question,
    correctAnswer,
  };
};

const runBrainCalc = () => {
  gameStart(descriptionOfGame, data);
};

export default runBrainCalc;

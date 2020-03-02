import gameStart from '../index.js';
import genRandomNumber from '../utils.js';

const descriptionOfGame = 'What number is missing in the progression?';
const min = 1;
const max = 10;
const lengthOfProgression = 10;

const genGameData = () => {
  const firstNum = genRandomNumber(min, max);
  const step = genRandomNumber(min, max);
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(firstNum + step * i);
  }

  const indexOfSpace = genRandomNumber(0, lengthOfProgression - 1);
  const correctAnswer = String(progression[indexOfSpace]);
  progression[indexOfSpace] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const runBrainProgression = () => {
  gameStart(descriptionOfGame, genGameData);
};

export default runBrainProgression;

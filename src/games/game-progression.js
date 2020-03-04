import runEngine from '../index.js';
import genRandomNumber from '../utils.js';

const descriptionOfGame = 'What number is missing in the progression?';
const min = 1;
const max = 10;

const buildProgression = (firstNum, step, lengthOfProgression) => {
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const genGameData = () => {
  const lengthOfProgression = 10;
  const firstNum = genRandomNumber(min, max);
  const step = genRandomNumber(min, max);
  const progression = buildProgression(firstNum, step, lengthOfProgression);

  const hiddenMemberIndex = genRandomNumber(0, lengthOfProgression - 1);
  const correctAnswer = String(progression[hiddenMemberIndex]);
  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const runBrainProgression = () => {
  runEngine(descriptionOfGame, genGameData);
};

export default runBrainProgression;

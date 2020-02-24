import { gameStart } from '../index.js';

const randomiser = (min, max) => Math.floor(Math.random() * max) + min;

const descriptionOfGame = 'What number is missing in the progression?';
const min = 1;
const max = 10;
const lengthOfProgression = 10;

const data = () => {
  const firstNum = randomiser(min, max);
  const step = randomiser(min, max);
  const coll = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    coll.push(firstNum + step * i);
  }

  const space = randomiser(0, lengthOfProgression - 1);
  const correctAnswer = String(coll[space]);
  coll[space] = '..';
  const question = coll.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const brainProgression = () => {
  gameStart(descriptionOfGame, data);
};

export default brainProgression;

import gameStart from '../index.js';
import genRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const genGameData = () => {
  let question = genRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  question = String(question);

  return {
    question,
    correctAnswer,
  };
};

const runBrainEven = () => {
  gameStart(descriptionOfGame, genGameData);
};

export default runBrainEven;

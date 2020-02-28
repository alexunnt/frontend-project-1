import gameStart from '../index.js';
import randomiser from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const data = () => {
  const question = randomiser(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const runBrainEven = () => {
  gameStart(descriptionOfGame, data);
};

export default runBrainEven;

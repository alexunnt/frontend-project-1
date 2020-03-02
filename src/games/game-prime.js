import gameStart from '../index.js';
import genRandomNumber from '../utils.js';

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let counter = 2; counter < number; counter += 1) {
    if (!(number % counter)) {
      return false;
    }
  }

  return true;
};

const genGameData = () => {
  const question = genRandomNumber(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const runBrainPrime = () => {
  gameStart(descriptionOfGame, genGameData);
};

export default runBrainPrime;

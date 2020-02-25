import { gameStart } from '../index.js';

const randomiser = (min, max) => Math.floor(Math.random() * max) + min;

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;

const data = () => {
  const number = randomiser(min, max);
  let isPrime = true;
  let correctAnswer = '';
  const question = number;

  if (number <= 1) {
    isPrime = false;
  }

  for (let counter = 1; counter < number; counter += 1) {
    if (!(number % counter)) {
      isPrime = false;
    }
  }

  if (isPrime) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return {
    question,
    correctAnswer,
  };
};

const brainPrime = () => {
  gameStart(descriptionOfGame, data);
};

export default brainPrime;

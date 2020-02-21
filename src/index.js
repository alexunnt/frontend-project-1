import readlineSync from 'readline-sync';

const countOfCorrectAnswers = 3;

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const gameStart = (descriptionOfGame, data) => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionOfGame);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < countOfCorrectAnswers; i += 1) {
    const { question, correctAnswer } = data();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default getUserName;

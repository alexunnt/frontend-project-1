import readlineSync from 'readline-sync';

const countOfCorrectAnswers = 3;

const runEngine = (descriptionOfGame, genGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptionOfGame);

  for (let i = 0; i < countOfCorrectAnswers; i += 1) {
    const { question, correctAnswer } = genGameData();

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

export default runEngine;

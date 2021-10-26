// index.js
import { askQuestion, answerQuestion } from './quiz.js';

const question = askQuestion();
console.log(question);


const answer = answerQuestion(question, 'a');
console.log(answer);
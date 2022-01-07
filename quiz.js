import { getQuestions } from "./question.js";
const questions = await getQuestions();

export function askQuestion() {
  console.log(questions[Math.floor(Math.random() * questions.length)]);
  return questions[Math.floor(Math.random() * questions.length)];
}

export function answerQuestion(question, answer) {
  if (question.correctAnswer == answer) {
    return `Yes ${question.correctAnswer}: ${question.a} is correct`;
  } else {
    return `Sorry ${answer} is incorrect, ${question.correctAnswer}: ${question.a} is correct`;
  }
}

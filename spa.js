import { askQuestion, answerQuestion } from "./quiz.js";
import { getQuestions } from "./question.js";
const question = askQuestion();
const html = (templateString) => templateString;
var answer = "";

const onRouteChange = () => {
  const pathname = new URL(window.location).pathname;
  const domElement = document.querySelector(".container");

  if (pathname === "/quiz") {
    domElement.innerHTML = html(`
    <div>
    <h1>Answer these questions</h1>
    <div>
    <h3>${question.question}</h3>
    <form action="/result">
      <input  type="submit" value="a" onclick="getInputValue(this);">${question.a}</input></br>
      <input  type="submit" value="b" onclick="getInputValue(this);">${question.b}</input></br>
      <input  type="submit" value="c" onclick="getInputValue(this);">${question.c}</input></br>
      <input  type="submit" value="d" onclick="getInputValue(this);">${question.d}</input></br>
    </form>
    <a href="/result" class="button">Result</a>
    </div>
`);
  } else if (pathname === "/result") {
    console.log("answer " + window.answer);
    console.log("question:" + question.question);
    domElement.innerHTML = html(`<h1>Result</h1>
    ${answerQuestion(question, window.answer)}
    `);
  } else if (pathname === "/") {
    domElement.innerHTML = html(`
    <div>
    <h1>Hello would you like to take a Quiz ?</h1>
    <a href="/quiz" class="button">Quiz</a>
    </div>
    `);
  } else {
    domElement.innerHTML = "not found =(";
  }
};
onRouteChange(); // call on page load

Array.from(document.querySelectorAll("a")).forEach((link) => {
  document.addEventListener("click", (evt) => {
    evt.preventDefault();
    history.pushState(null, "My new page", evt.target.href);
    onRouteChange();
  });
});

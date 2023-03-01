//your code here
const evaluate = document.querySelector("#evaluatedText");
const wordCount = document.querySelector("#wordCount");
let wordsCountArray = [];

evaluate.addEventListener("keydown", function (e) {
  wordsCountArray = evaluate.value.split(" ");
  wordCount.textContent = wordsCountArray.length;
});

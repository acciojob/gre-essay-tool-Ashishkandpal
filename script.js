//your code here
const evaluate = document.querySelector("#evaluatedText");
const wordCount = document.querySelector("#wordCount");
let wordsCountArray = [];

evaluate.addEventListener("keydown", function (e) {
  wordsCountArray = evaluate.value.split(" ");
  wordCount.textContent = wordsCountArray.length;
  //   console.log(wordsCountArray);
  if (e.key == "Backspace" && evaluate.value.length == 1) {
    wordCount.textContent = 0;
  }
  console.log(e.key);
});

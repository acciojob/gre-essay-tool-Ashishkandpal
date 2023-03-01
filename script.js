const evaluate = document.querySelector("#evaluatedText");
const wordCount = document.querySelector("#wordCount");

evaluate.addEventListener("input", () => {
  let txt = evaluate.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});

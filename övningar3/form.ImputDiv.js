// 2. (3p) Skapa ett inputfält och en knapp på html-sidan.
// När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför
//input-fältet i en div.
const form = document.getElementById("myForm");
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = inputText.value;

  result.textContent = inputValue;
});

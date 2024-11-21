// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

for (let index = 1; index < 11; index++) {
  const button = document.createElement("button");
  button.classList.add("primary");
  button.textContent = "button" + index;
  document.body.appendChild(button);
  // 4.2 (2p) Lägg till addEventlistener på varje button.
  // Vid eventet "click" på button ska klassen ändras till "secondary"
  button.addEventListener("click", function (e) {
    button.classList.replace("primary", "secondary");
  });
}

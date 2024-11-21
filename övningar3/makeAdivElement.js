// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.
const myElement = document.getElementById("my-element");
const A = document.getElementById("A");
const C = document.getElementById("C");

myElement.innerHTML = `
  <div id="A">A</div>
  <div>B</div>  
  <div id="C">C</div>
`;
//SVÅRA VÄGEN
// const div = document.createElement("div");
// div.textContent = "B";
// myElement.insertBefore(div, C);

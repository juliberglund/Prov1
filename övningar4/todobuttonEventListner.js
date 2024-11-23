// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  const userID1 = data.filter((todo) => todo.userId === 1);
  userID1.forEach((todo) => {
    const todoDiv = document.createElement("div");

    const btnTitle = todo.completed ? "Undo" : "Done";

    todoDiv.innerHTML = `
      <h2 class="${todo.completed ? "completed" : ""}">${todo.title}</h2>
     <button>${btnTitle}</button>
   `;
    const button = todoDiv.querySelector("button");
    button.addEventListener("click", () =>
      toggleCompletion(todo, button, todoDiv)
    );

    document.body.appendChild(todoDiv);

    document.body.appendChild(todoDiv);
  });
}
function toggleCompletion(todo, button, todoDiv) {
  // Växla completed-statusen
  todo.completed = !todo.completed;

  // Uppdatera knappen
  button.textContent = todo.completed ? "Undo" : "Done";

  // Uppdatera stilen på todo-titeln
  const title = todoDiv.querySelector("h2");
  if (todo.completed) {
    title.style.textDecoration = "line-through";
  } else {
    title.style.textDecoration = "none";
  }
}

getTodos();

// 10.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// const btnTitle = todo.completed ? "Undo" : "Done";

// todoDiv.innerHTML = `
//  <h2>${todo.title}</h2>
//  <button>${btnTitle}</button>
// `;

// 10.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.
//  <h2 class="${todo.completed ? "completed" : ""}">${todo.title}</h2>
//      <button>${btnTitle}</button>
//    `;
//    / Uppdatera knappen
//   button.textContent = todo.completed ? "Undo" : "Done";

//   // Uppdatera stilen på todo-titeln
//   const title = todoDiv.querySelector("h2");
//   if (todo.completed) {
//     title.style.textDecoration = "line-through";
//   } else {
//     title.style.textDecoration = "none";
//   }

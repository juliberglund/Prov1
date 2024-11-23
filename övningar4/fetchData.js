// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const completedTodos = data.filter((todo) => todo.completed === true);
    const container = document.getElementById("container");
    // Loop through the filtered todos and display their titles
    completedTodos.forEach((todo) => {
      const titleDiv = document.createElement("div");

      // Set the text content to the title of the todo
      titleDiv.textContent = todo.title;
      container.appendChild(titleDiv);
    });
  });

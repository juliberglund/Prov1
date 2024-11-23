// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const usersContainer = document.createElement("div");
  usersContainer.className = "usersContainer";
  document.body.appendChild(usersContainer); // Append to body (you can append it to any existing container

  data.forEach((users) => {
    const userDiv = document.createElement("div");
    userDiv.className = "userDiv";

    userDiv.innerHTML = `<div><strong>Name:</strong>${users.name}</div> 
    <div><strong>Email:</strong>${users.email}</div>
     <div><strong>Adress:</strong>${users.address.city}</div>`;

    usersContainer.appendChild(userDiv);
    addStyles();
  });
}
function addStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
      /* Grid layout */
      .usersContainer {
        display: grid;
        gap: 20px;
        padding: 20px;
      }
  
      /* Desktop: 3 columns */
      @media (min-width: 768px) {
        .usersContainer {
          grid-template-columns: repeat(3, 1fr);
        }
      }
  
      /* Mobile: 1 column */
      @media (max-width: 767px) {
        .usersContainer {
          grid-template-columns: 1fr;
        }
      }
    `;
}
fetchData();

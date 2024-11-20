// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

function updatePeople(peopleArr) {
  // Din kod här:
  peopleArr.forEach((person) => {
    if (person.age >= 18) {
      person.adult = true;
    } else {
      person.adult = false;
    }
  });
  return peopleArr;
}

console.log(updatePeople(people));
// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.
function onlyAdults(people) {
  return people.filter((person) => person.age >= 18);
}
console.log(onlyAdults(people));

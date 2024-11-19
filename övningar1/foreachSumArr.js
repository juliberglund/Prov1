// 1.1 Använd forEach för att summera talen i arrayen numbers
// och spara resultatet i variabeln sum.
let sum = 0;
const numbers = [1, 54, 532, 33, 44];

function summera() {
  numbers.forEach((num) => {
    sum += num;
  });
}
summera();
console.log(sum);
// Förklaring:
// forEach(): Går igenom varje element i arrayen numbers.
// sum += num: Lägg till varje tal i arrayen till variabeln sum.
// När du anropar summera() så uppdateras sum med summan av alla tal i arrayen.
// Förklaring av kod:
// sum = 0: Här sätter vi den initiala summan till 0.
// numbers.forEach((num) => { sum += num; }): För varje nummer (num) i arrayen, lägg till det till sum.
// Efter att ha anropat summera(), kommer sum att innehålla summan av alla tal i arrayen, som i det här fallet är 664.

// 1.2 Använd myForEach som tar en array och en funktion som input
// för att summera talen i arrayen numbers
// och spara reslutatet i variabeln mySum.
let mySum = 0;

function addToSum(num) {
  mySum += num;
}

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

const myArray = [55, 76, 3, 245, 23, 456];
myForEach(myArray, addToSum);
console.log(mySum);

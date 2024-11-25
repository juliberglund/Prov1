// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal
const numbers = [4, 67, 88, 27, 7, 9];

function calculateAverage(arr) {
  // Din kod här

  let sum = 0; // Variabel för att lagra summan av talen

  // Använd forEach för att iterera genom arrayen och summera alla tal
  arr.forEach((nbr) => {
    sum += nbr; // Lägg till varje tal till summan
  });

  // Beräkna medelvärdet
  const average = sum / arr.length;

  return average; // Returnera medelvärdet
}

const average = calculateAverage(numbers);
console.log(average); // Output: 33.5

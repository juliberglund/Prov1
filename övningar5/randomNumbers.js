// Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1
function generateRandomNumbers(min, max) {
  const randomnumbers = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1));
    randomnumbers.push(randomNumber);
  }
  return randomnumbers;
}
console.log(generateRandomNumbers(1, 10));
//Math.floor() rundar ett flyttal nedåt till närmaste heltal.

// 3. (2p) Totala längden av orden
// Skriv klart funktionen som räknar ut den totala längden av dom 3 orden.

function totalWordLength(word1, word2, word3) {
  const words = word1 + word2 + word3;
  return words.length;
}

const result = totalWordLength("hej", "på", "dig");
console.log(result); // Ska logga 8

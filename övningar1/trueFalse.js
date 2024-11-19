// 3. Samma ord?
// Skriv klart funktionen som kollar om två ord är likadana
// oberoende av stor och liten bokstav.

function compareWords(word1, word2) {
  //din kod här
  if (word1.toLowerCase() === word2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(compareWords("hej", "HEJ")); // Ska logga true
console.log(compareWords("hej", "nej")); // Ska logga false

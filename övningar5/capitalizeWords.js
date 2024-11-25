// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

const arr = ["hemma", "hos", "mamma", "och", "pappa", "mormor", "farmor"];

const capitalizeWords = (arr) => {
  return arr.map((word) => {
    // Gör första bokstaven stor och resten av ordet som det är
    return word.charAt(0).toUpperCase() + word.slice(1); // Kombinera de två metoderna korrekt
  });
};
//word.charAt(0).toUpperCase(): Hämta det första tecknet av varje ord, och gör det stort.
// word.slice(1): Hämta resten av ordet (från index 1 till slutet) och lämna det som det är.
// +: Kombinera det första stora tecknet med resten av ordet.
const capitalizedArr = capitalizeWords(arr);
console.log(capitalizedArr);

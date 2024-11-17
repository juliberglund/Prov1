// 4 Skriv en funktion som tar en array med strängar som input och
// returnerar en array med bara de strängar som är minst 4 tecken långa.

const arrays = (arr) => {
  return arr.filter((str) => str.length >= 4);
};
const myArray = ["Hej", "mamma", "pappa", "Nicklas", "Julia"];
const result = arrays(myArray);
console.log(result);

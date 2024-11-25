// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

const findLongestWord = (str) => {
  const splitArray = str.split(" ");
  const lenghtStringArray = splitArray.map((item) => item.length);
  const maxLengthinArr = Math.max(...lenghtStringArray);
  const result = splitArray.find((item) => item.length === maxLengthinArr);
  return result;
};
console.log(findLongestWord("hej juliapersson mina skor"));

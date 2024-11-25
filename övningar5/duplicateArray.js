// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.
arr = ["hej", "hej", "mamma", "pappa", "farmor", "mormor", "mormor"];
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates(arr));

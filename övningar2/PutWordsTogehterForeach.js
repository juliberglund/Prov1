// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord.
let myWord = "";
const words = ["programming", "is", "fun"];
words.forEach((word) => {
  myWord += word;
});
console.log(myWord); // Ska logga: "programmingisfun";

// 1.2 (2p) Använd en for-lop för att lägga ihop orden i words-arrayen till en mening
// med mellanslag mella varje ord.
let sentence = "";
for (let index = 0; index < words.length; index++) {
  sentence += words[index];
  if (index < words.length - 1) {
    sentence += " "; // Add a space between words, except after the last one
  }
}

console.log(sentence); // Ska logga "programming is fun";

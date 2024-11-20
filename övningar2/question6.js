// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr
const hawaii = 80;
const peperoni = 90;
const vegetarian = 85;

function pizzaPrice(pizza) {
  if (pizza === "hawaii") {
    return hawaii;
  } else if (pizza === "peperoni") {
    return peperoni;
  } else if (pizza === "vegetarian") {
    return vegetarian;
  } else {
    console.log("Invalid type");
  }
}

console.log(pizzaPrice("hawaii")); // 80
console.log(pizzaPrice("peperoni")); // 90
console.log(pizzaPrice("vegetarian")); // 85
console.log(pizzaPrice("margarita")); // "Invalid pizza type"

// function pizzaPrice(pizza) {
//   switch(pizza) {
//     case "hawaii":
//       return hawaii;
//     case "peperoni":
//       return peperoni;
//     case "vegetarian":
//       return vegetarian;
//     default:
//       return "Invalid pizza type";
//   }
// }

// 7.1 (3p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

// 7.2 (3p) Gör sidan responsive:
// I desktop-vy ska varje land visas i 3 kolumner.
// I mobil-vy ska varje land visas i en kolumn med 100% width.
async function fetchData() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  const data = await response.json();
  const container = document.createElement("div");
  container.className = "countries-container"; // Klass för CSS-styling

  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.className = "countryDiv";
    // Handle multiple currencies (if there are any) and flags
    const currency = country.currencies
      ? Object.values(country.currencies)[0]?.name
      : "No currency available";
    // country.currencies This is checking if the currencies property exists within the country object
    //Object.values(country.currencies) If country.currencies exists, Object.values()
    //converts the currencies object into an array of the values (the currency objects themselves)
    //[0]?.name [0] selects the first object in the array (which represents the first currency). The ? is the optional chaining operator,
    // which ensures that if the array is empty (i.e., there are no currencies), the code won't throw an error.

    const flag = country.flags.png ? country.flags.png : "No flag available";
    const flagAlt = country.flags.alt
      ? country.flags.alt
      : "Flag description not available"; // Provide a default message if alt is missing

    countryDiv.innerHTML = `<div><h1>${country.name.common}</h1></div>
    
        <h2>${currency}</h2>
        <img src="${flag}" alt="${flagAlt}" />
        <p>${flagAlt}</p>`;

    document.body.appendChild(countryDiv);
  });
  document.body.appendChild(container);
}
fetchData();

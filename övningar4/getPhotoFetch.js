// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.
async function images() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json(); // Wait for the response to be converted to JSON
    const container = document.getElementById("container");

    //Slice from index 0 to 19 (first 20 images) //array.slice(start, end);
    data.slice(0, 20).forEach((imgData) => {
      container.innerHTML += `
      <div>
          <img src="${imgData.url}" alt="${imgData.title}">
      </div>`;
    });
  } catch (error) {
    console.error("Error fetching channels:", error); // Handle any errors
  }
}
images();

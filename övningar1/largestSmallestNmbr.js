// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:

function findLargest(numbers) {
  // lägg till din kod här
  let largestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element > largestNum) {
      largestNum = element;
    }
  }
  return largestNum;
}

console.log(findLargest([1, 2, 3, 4, 5, 100])); // ska logga 5
console.log(findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

function findSmallest(numbers) {
  // lägg till din kod här
  let smallestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < smallestNum) {
      smallestNum = element;
    }
  }
  return smallestNum;
}

console.log(findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log(findSmallest([-1, -2, -3, -4, -5])); // ska logga -5

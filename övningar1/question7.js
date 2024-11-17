// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

function removeVowels(word) {
  //din kod här
  return word
    .split("")
    .filter((letter) => !/[aouåeiyäö]/i.test(letter))
    .join("");
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll

// Absolutely! Let's break down your `removeVowels` function step by step to understand how it works. Your function is designed to remove vowels (defined as `aouåeiyäö`) from a given string, and here's the breakdown:

// ### Full Code:

// ```javascript
// function removeVowels(word) {
//   return word
//     .split("")                 // Step 1: Convert the word to an array of characters
//     .filter((letter) =>        // Step 2: Filter out the vowels
//       !/[aouåeiyäö]/i.test(letter)  // Check if the letter is a vowel (case-insensitive)
//     )
//     .join("");                 // Step 3: Join the array back into a string
// }

// console.log(removeVowels("hej"));   // "hj"
// console.log(removeVowels("hallå")); // "hll"
// ```

// ### Step-by-Step Explanation:

// #### Step 1: **`split('')`**

// ```javascript
// word.split("")
// ```

// - **What it does**: The `split("")` method splits the input string `word` into an array of individual characters.
// - **Why we use it**: Strings in JavaScript are not directly iterable, but arrays are. By converting the string into an array of characters, we can apply array methods like `filter()`.
// - **Example**:
//   - `"hej"` becomes `['h', 'e', 'j']`.
//   - `"hallå"` becomes `['h', 'a', 'l', 'l', 'å']`.

// #### Step 2: **`filter()`**

// ```javascript
// .filter((letter) => !/[aouåeiyäö]/i.test(letter))
// ```

// - **What it does**: The `filter()` method creates a new array with all the elements that pass the test implemented by the provided function. In this case, the test checks if a character is a vowel.
// - **How it works**:
//   - The `filter()` method runs through each character (`letter`) in the array and checks if it's a vowel.
//   - The regular expression `/[aouåeiyäö]/i` matches any **vowel** in the string.
//   - The `i` flag makes the regular expression case-insensitive, meaning it will match both uppercase and lowercase vowels (e.g., `"A"` and `"a"` will both be matched).
//   - The `!` before the regular expression negates the condition, so **we keep only non-vowel characters** (i.e., the characters that do not match the vowel pattern).
// - **Example**:
//   - For the word `"hej"`, `filter()` checks each character:
//     - `'h'` (not a vowel) passes the test.
//     - `'e'` (a vowel) is filtered out.
//     - `'j'` (not a vowel) passes the test.
//   - Result: `['h', 'j']`.

//   - For `"hallå"`:
//     - `'h'` (not a vowel) passes.
//     - `'a'` (a vowel) is removed.
//     - `'l'` (not a vowel) passes.
//     - Another `'l'` (not a vowel) passes.
//     - `'å'` (a vowel) is removed.
//   - Result: `['h', 'l', 'l']`.

// #### Step 3: **`join('')`**

// ```javascript
// .join("")
// ```

// - **What it does**: The `join('')` method takes all the elements of the array (in this case, the characters that are not vowels) and concatenates them back into a single string.
// - **Why we use it**: After filtering out the vowels, we end up with an array of characters, but we want the result to be a single string. `join('')` joins the array elements together without any spaces or separators between them.
// - **Example**:
//   - For the filtered array `['h', 'j']`, `join("")` combines them into `"hj"`.
//   - For the filtered array `['h', 'l', 'l']`, `join("")` combines them into `"hll"`.

// ### Full Process Walkthrough

// #### 1. Input: `"hej"`

// - **Step 1 (`split('')`)**: `"hej"` becomes `['h', 'e', 'j']`.
// - **Step 2 (`filter()`)**:
//   - `'h'` is not a vowel, so it remains in the array.
//   - `'e'` is a vowel, so it's removed from the array.
//   - `'j'` is not a vowel, so it remains in the array.
//   - The resulting array is `['h', 'j']`.
// - **Step 3 (`join('')`)**: We join `['h', 'j']` back into a string: `"hj"`.

// #### 2. Input: `"hallå"`

// - **Step 1 (`split('')`)**: `"hallå"` becomes `['h', 'a', 'l', 'l', 'å']`.
// - **Step 2 (`filter()`)**:
//   - `'h'` is not a vowel, so it remains in the array.
//   - `'a'` is a vowel, so it's removed from the array.
//   - `'l'` is not a vowel, so it remains in the array.
//   - Another `'l'` is not a vowel, so it remains in the array.
//   - `'å'` is a vowel, so it's removed from the array.
//   - The resulting array is `['h', 'l', 'l']`.
// - **Step 3 (`join('')`)**: We join `['h', 'l', 'l']` back into a string: `"hll"`.

// ### Final Output:

// ```javascript
// console.log(removeVowels("hej"));   // "hj"
// console.log(removeVowels("hallå")); // "hll"
// ```

// ### Key Concepts:
// 1. **`split('')`**: Splits the string into an array of individual characters.
// 2. **`filter()`**: Filters out vowels by checking if the letter matches the pattern (vowels in this case).
// 3. **`join('')`**: Joins the array back into a string after vowels have been removed.

// ### Why Does It Work?
// - The combination of **splitting**, **filtering**, and **joining** allows us to selectively remove vowels from the string while maintaining all other characters.
// - **Regular Expressions**: The `/[aouåeiyäö]/i` regular expression is key here because it identifies vowels in the string, and the negation (`!`) ensures that we remove those vowels.

// This is an efficient way to manipulate strings in JavaScript, and it’s very flexible for removing any set of characters you choose!

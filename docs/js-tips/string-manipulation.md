---
sidebar_position: 10
sidebar_label: 'String Manipulation part-1'
---

# String/Array Manipulation

## Reverse a String With Built-In Functions

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');

// str.split('') -> ['h', 'e', 'l', 'l', 'o']
```

## Reverse a String With a Decrementing For Loop

```js
function reverseString(str) {
  let newString = '';
  // iterate from the end
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // str[0] = 'h'
  }
  return newString;
}
reverseString('hello');
```

## Reverse a String With Recursion

```js
function reverseString(str) {
  if (str === '') // Base case
    return '';
  else // Recursive case
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
```

### Explanation:

1. **Base Case**:
   - The function checks if the string `str` is empty (`str === ''`).
   - If it is empty, it returns an empty string `''`. This is the stopping condition for the recursion.

2. **Recursive Case**:
   - If the string is not empty, the function:
     - Calls itself with the substring of `str` starting from the second character (`str.substr(1)`).
     - Appends the first character of the string (`str.charAt(0)`) to the result of the recursive call.

3. **Recursive Breakdown**:
   - The function keeps calling itself with progressively smaller substrings until it reaches the base case (an empty string).
   - Once the base case is reached, the recursion starts returning and appending characters in reverse order.

---

### Example: `reverseString("hello")`

1. Initial call: `reverseString("hello")`
   - `str.substr(1)` = `"ello"`
   - `str.charAt(0)` = `"h"`
   - Returns: `reverseString("ello") + "h"`

2. Second call: `reverseString("ello")`
   - `str.substr(1)` = `"llo"`
   - `str.charAt(0)` = `"e"`
   - Returns: `reverseString("llo") + "e"`

3. Third call: `reverseString("llo")`
   - `str.substr(1)` = `"lo"`
   - `str.charAt(0)` = `"l"`
   - Returns: `reverseString("lo") + "l"`

4. Fourth call: `reverseString("lo")`
   - `str.substr(1)` = `"o"`
   - `str.charAt(0)` = `"l"`
   - Returns: `reverseString("o") + "l"`

5. Fifth call: `reverseString("o")`
   - `str.substr(1)` = `""` (empty string)
   - `str.charAt(0)` = `"o"`
   - Returns: `reverseString("") + "o"`

6. Base case: `reverseString("")`
   - Returns: `""`
---

### Returning Results:
Till the recursive end, There'll be no output. After the loop is end, characters will be appended from last call to first (because last value will be at top)
Now, the recursion starts returning values:

- `reverseString("")` → `""`
- `reverseString("o")` → `"" + "o"` → `"o"`
- `reverseString("lo")` → `"o" + "l"` → `"ol"`
- `reverseString("llo")` → `"ol" + "l"` → `"oll"`
- `reverseString("ello")` → `"oll" + "e"` → `"olle"`
- `reverseString("hello")` → `"olle" + "h"` → `"olleh"`

---

## Reverse a string using Conditional (Ternary) Operator

```js
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
```

## find a longest word in the string

```js
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const sentence = "This is a sample sentence with some long words";
const longest = findLongestWord(sentence); // sentence
```

## find out if string is palindrome

```js
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the original string is equal to the reversed string
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

## Remove duplicates from an  using `set`

A Set is a collection of unique values. When you pass an array to a Set, it automatically removes duplicates.

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

## Remove duplicates from an  using `filter`

By checking if the index of an element is the same as its first occurrence, duplicates can be filtered out.

```js
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
// uniqueArray is now [1, 2, 3, 4, 5]
```

## Remove duplicates from an  using `reduce`

The reduce method executes a reducer function on each element of the array, resulting in a single output value. It can be used to build a new array containing only unique elements.

```js
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
// uniqueArray is now [1, 2, 3, 4, 5]
```

## Remove duplicates from an  using `forEach`

```js
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
array.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
// uniqueArray is now [1, 2, 3, 4, 5]
```
## Remove duplicates from an  using `for loop`

```js
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
```

## check if two strings are Anagrams

```js
function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters, convert to lowercase, and sort the characters
  const formatString = (str) =>
    str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

  // Format both strings and compare
  return formatString(str1) === formatString(str2);
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true
```
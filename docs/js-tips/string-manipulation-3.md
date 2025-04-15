---
sidebar_position: 12
sidebar_label: 'String Manipulation part-3'
---

# String/Array Manipulation Part 3

## Merge two arrays and sort them in ascending order

```js
function mergeAndSortArrays(arr1, arr2) {
  // Merge the two arrays
  const mergedArray = [...arr1, ...arr2];

  // Sort the merged array in ascending order
  return mergedArray.sort((a, b) => a - b);
}

// Example usage
console.log(mergeAndSortArrays([3, 1, 4], [2, 5, 0])); // Output: [0, 1, 2, 3, 4, 5]
console.log(mergeAndSortArrays([10, 20], [5, 15, 25])); // Output: [5, 10, 15, 20, 25]
console.log(mergeAndSortArrays([], [1, 2, 3])); // Output: [1, 2, 3]
console.log(mergeAndSortArrays([7, 8, 9], [])); // Output: [7, 8, 9]
```

## Remove an element from an array

```js
function removeElement(arr, element) {
  // Filter out the element to be removed
  return arr.filter(item => item !== element);
}

// Example usage
console.log(removeElement([1, 2, 3, 4, 5], 3)); // Output: [1, 2, 4, 5]
console.log(removeElement([10, 30, 40], 50)); // Output: [10, 30, 40]
console.log(removeElement([1, 1, 2, 3], 1)); // Output: [2, 3]
console.log(removeElement([], 5)); // Output: []
```

## Second largest element in an array

```js
function findSecondLargestElement(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements");
  }

  // Remove duplicates and sort the array in descending order
  const uniqueSortedArray = [...new Set(arr)].sort((a, b) => b - a);

  // Return the second largest element
  return uniqueSortedArray[1];
}

// Example usage
console.log(findSecondLargestElement([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargestElement([10, 20, 20, 30])); // Output: 20
console.log(findSecondLargestElement([-10, -20, -5, -1])); // Output: -5
console.log(findSecondLargestElement([7, 7, 7, 7])); // Throws an error
```

## Largest element in an array

```js
function findLargestElement(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  return Math.max(...arr); // Use Math.max with the spread operator
}

// Example usage
console.log(findLargestElement([1, 2, 3, 4, 5])); // Output: 5
console.log(findLargestElement([-10, -20, -5, -1])); // Output: -1
console.log(findLargestElement([100, 50, 200, 150])); // Output: 200
console.log(findLargestElement([7])); // Output: 7
```

## Reverse the order of words in a string with built-in method

```js
function reverseWords(str) {
  // Split the string into an array of words, reverse the array, and join it back into a string
  return str.split(' ').reverse().join(' ');
}

// Example usage
console.log(reverseWords("Hello World")); // Output: "World Hello"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"
console.log(reverseWords("Reverse these words")); // Output: "words these Reverse"
console.log(reverseWords("SingleWord")); // Output: "SingleWord"
```

## Reverse the order of words in a string without built-in method

```js
function reverseWordsWithoutBuiltIn(str) {
  let words = [];
  let word = "";

  // Split the string into words manually
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word) {
        words.push(word);
        word = "";
      }
    } else {
      word += str[i];
    }
  }
  if (word) {
    words.push(word); // Add the last word
  }

  // Reverse the words array manually
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
    if (i !== 0) {
      reversed += " ";
    }
  }

  return reversed;
}

// Example usage
console.log(reverseWordsWithoutBuiltIn("Hello World")); // Output: "World Hello"
console.log(reverseWordsWithoutBuiltIn("JavaScript is fun")); // Output: "fun is JavaScript"
console.log(reverseWordsWithoutBuiltIn("Reverse these words")); // Output: "words these Reverse"
console.log(reverseWordsWithoutBuiltIn("SingleWord")); // Output: "SingleWord"
```

## Largest common prefix among an array of strings

```js
function findLargestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  // Start with the first string as the prefix
  let prefix = strings[0]; // flower (first string), i = 0

  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      // Reduce the prefix by removing the last character
      prefix = prefix.slice(0, -1);

      // If the prefix becomes empty, return an empty string
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

// Example usage
console.log(findLargestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(findLargestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(findLargestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"
console.log(findLargestCommonPrefix(["prefix", "prefixes", "prefixation"])); // Output: "prefix"
console.log(findLargestCommonPrefix([])); // Output: ""
```

### Example Usage

1. **Input**: `["flower", "flow", "flight"]`
   - Initial prefix: `"flower"`
   - After comparing with `"flow"`, prefix becomes `"flow"`.
   - After comparing with `"flight"`, prefix becomes `"fl"`.
   - **Output**: `"fl"`

2. **Input**: `["dog", "racecar", "car"]`
   - Initial prefix: `"dog"`
   - After comparing with `"racecar"`, prefix becomes `""` (no common prefix).
   - **Output**: `""`

3. **Input**: `["interspecies", "interstellar", "interstate"]`
   - Initial prefix: `"interspecies"`
   - After comparing with `"interstellar"`, prefix becomes `"inters"`.
   - After comparing with `"interstate"`, prefix remains `"inters"`.
   - **Output**: `"inters"`

### Key Points
- The function uses a **greedy reduction approach** to find the common prefix.
- It reduces the prefix character by character until all strings in the array start with the prefix.
- If no common prefix exists, it returns an empty string.

## Intersection of two arrays

```js
function findIntersection(arr1, arr2) {
  // Use a Set to store elements of the first array for quick lookup
  const set1 = new Set(arr1);

  // Filter elements in the second array that are also in the first array
  return arr2.filter(item => set1.has(item));
}

// Example usage
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(findIntersection([10, 20, 30], [15, 20, 25])); // Output: [20]
console.log(findIntersection([1, 2, 3], [4, 5, 6])); // Output: []
console.log(findIntersection([], [1, 2, 3])); // Output: []
console.log(findIntersection([1, 1, 2, 2], [2, 2, 3, 3])); // Output: [2, 2]
```

## Fibonacci sequence

```js
function generateFibonacciSequence(limit) {
  if (limit < 0) {
    throw new Error("Limit must be a non-negative number");
  }

  const sequence = [0, 1]; // Start with the first two Fibonacci numbers

  while (true) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextNumber > limit) {
      break;
    }
    sequence.push(nextNumber);
  }

  return sequence;
}
```

## Swap two numbers

### Swap two numbers using a Temporary Variable

```js
function swapNumbers(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

// Example usage
let [x, y] = swapNumbers(5, 10);
console.log(x, y); // Output: 10, 5
```

### Swap two numbers using Arithmetic Operations

```js
function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

// Example usage
let [x, y] = swapNumbers(5, 10);
console.log(x, y); // Output: 10, 5
```

### Swap two numbers using Array Destructuring

```js
function swapNumbers(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

// Example usage
let [x, y] = swapNumbers(5, 10);
console.log(x, y); // Output: 10, 5
```

### Swap two numbers  using Binory operator

```js
let a = 5; // Binary: 0101
let b = 3; // Binary: 0011

// Swapping using XOR
a = a ^ b; // a becomes 0101 ^ 0011 = 0110 (6 in decimal)
b = a ^ b; // b becomes 0110 ^ 0011 = 0101 (5 in decimal)
a = a ^ b; // a becomes 0110 ^ 0101 = 0011 (3 in decimal)

console.log(`After swapping: a = ${a}, b = ${b}`);
```

## Add two complex numbers

```js
function addComplexNumbers(c1, c2) {
  return {
    real: c1.real + c2.real,
    imaginary: c1.imaginary + c2.imaginary
  };
}

// Example usage
const complex1 = { real: 3, imaginary: 4 }; // 3 + 4i
const complex2 = { real: 1, imaginary: 2 }; // 1 + 2i

const result = addComplexNumbers(complex1, complex2);
console.log(`${result.real} + ${result.imaginary}i`); // Output: 4 + 6i
```

### Complex number format

```js
function parseComplexNumber(input) {
  // Remove spaces and split the input into parts
  // highlight-next-line
  const parts = input.replace(/\s+/g, '').split('+');
  /*
  \s: Matches any whitespace character, including spaces, tabs, and line breaks.
  +: Matches one or more occurrences of the preceding pattern (\s in this case).
  */
  
  // Extract the real and imaginary parts
  const real = parseInt(parts[0]);
  const imaginary = parseInt(parts[1].replace('i', ''));

  return { real, imaginary };
}

// Example usage
const input = "3 + 4i";
const result = parseComplexNumber(input);
console.log(result); // Output: { real: 3, imaginary: 4 }
```
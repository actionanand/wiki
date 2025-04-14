---
sidebar_position: 11
sidebar_label: 'String Manipulation part-2'
---

# String/Array Manipulation Part 2

## count the vowels in a string using `regex`

```js
function countVowels(str) {
  // Define a regular expression to match vowels (case-insensitive)
  const vowels = /[aeiou]/gi;

  // Match the vowels in the string and return the count
  const matches = str.match(vowels);
  return matches ? matches.length : 0; // If no vowels, return 0
}

// Example usage
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("Cortellis CDX")); // Output: 4
console.log(countVowels("rhythm")); // Output: 0
```

## count the vowels in a string using `for of`

```js
function countVowels(str) {
  // Define a set of vowels
  const vowels = "aeiouAEIOU";
  let count = 0;

  // Loop through each character in the string using for...of
  for (const char of str) {
    if (vowels.includes(char)) {
      count++; // Increment the count if the character is a vowel
    }
  }

  return count;
}

// Example usage
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("Cortellis CDX")); // Output: 4
console.log(countVowels("rhythm")); // Output: 0
```

## Largest number in an array

```js
function findLargestNumber(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let largest = arr[0]; // Assume the first element is the largest

  for (const num of arr) {
    if (num > largest) {
      largest = num; // Update largest if a bigger number is found
    }
  }

  return largest;
}

// Example usage
console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5
console.log(findLargestNumber([-10, -20, -5, -1])); // Output: -1
console.log(findLargestNumber([100, 50, 200, 150])); // Output: 200
```

## Prime number or not

```js
function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check divisors from 2 to the square root of the number
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not a prime number
    }
  }

  return true; // If no divisors are found, it's a prime number
}

// Example usage
console.log(isPrime(2));  // Output: true
console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false
```

## Factorial

```js
function factorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i; // Multiply result by the current number
  }

  return result;
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."
```

## Factorial using Recursive method

```js
function factorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (num === 0 || num === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return num * factorial(num - 1); // Recursive case
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."
```

## Remove whitespace from a string

```js
function removeWhitespace(str) {
  return str.replace(/\s+/g, ''); // Replace all whitespace characters with an empty string
}

// \s: Matches any whitespace character (spaces, tabs, newlines).
// +: Matches one or more consecutive whitespace characters.

// Example usage
console.log(removeWhitespace("Hello World")); // Output: "HelloWorld"
console.log(removeWhitespace("  JavaScript   is   fun  ")); // Output: "JavaScriptisfun"
console.log(removeWhitespace("NoSpacesHere")); // Output: "NoSpacesHere"
```

## Sum of all elements in an array using `for loop`

```js
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }

  const avg = sum / arr.length; // average
  return sum;
}

// Example usage
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, -2, -3, -4, -5])); // Output: -15
console.log(sumArray([])); // Output: 0
```

## Sum of all elements in an array using `reduce`

```js
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0); // Accumulate the sum starting from 0
}

// Example usage
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, -2, -3, -4, -5])); // Output: -15
console.log(sumArray([])); // Output: 0
```

## Sorting in ascending order

```js
function sortNumbersAscending(arr) {
  return arr.sort((a, b) => a - b); // Compare numbers for ascending order
}

// Example usage
console.log(sortNumbersAscending([5, 2, 9, 1, 7])); // Output: [1, 2, 5, 7, 9]

/*
By default, the sort() method converts elements to strings and sorts them lexicographically (alphabetically).
if (a-b) is +ve, then swap.
if -ve or 0, then no swap
*/
```

## Sorting in descending order

```js
function sortNumbersDescending(arr) {
  return arr.sort((a, b) => b - a); // Compare numbers for descending order
}

// Example usage
console.log(sortNumbersDescending([5, 2, 9, 1, 7])); // Output: [9, 7, 5, 2, 1]
```

## Sorting using **Bubble Sort**

```js
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage
console.log(bubbleSort([5, 2, 9, 1, 7])); // Output: [1, 2, 5, 7, 9]
console.log(bubbleSort([10, -1, 2, 8, 0])); // Output: [-1, 0, 2, 8, 10]
```

### Explanation:
1. **Outer Loop**:
   - Runs `n - 1` times, where `n` is the length of the array.
   - Ensures that the largest unsorted element "bubbles up" to its correct position in each iteration.

2. **Inner Loop**:
   - Compares adjacent elements (`arr[j]` and `arr[j + 1]`).
   - If the current element is greater than the next element, they are swapped.

3. **Swapping**:
   - A temporary variable (`temp`) is used to swap the values of `arr[j]` and `arr[j + 1]`.

4. **Sorted Array**:
   - After all iterations, the array is sorted in ascending order.

## Array is sorted in ascending or not

```js
function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If any element is greater than the next, it's not sorted
    }
  }
  return true; // If no such element is found, the array is sorted
}

// Example usage
console.log(isSortedAscending([1, 2, 3, 4, 5])); // Output: true
console.log(isSortedAscending([5, 3, 2, 1]));    // Output: false
console.log(isSortedAscending([1, 2, 2, 3]));    // Output: true
console.log(isSortedAscending([]));              // Output: true (empty array is considered sorted)
console.log(isSortedAscending([10]));            // Output: true (single-element array is sorted)
```

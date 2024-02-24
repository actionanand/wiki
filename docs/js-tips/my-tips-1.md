---
sidebar_position: 5
sidebar_label: 'My Tips - 1'
---

# My Tips - 1

### Character Frequency

Converting `string` into the object with letters & its frequency

```js
const freqMap = str => str.split('').reduce(
  (map, char) => (map[char] ??= 0, map[char]++, map), {}
);

freqMap('anand');

// Output
{a: 2, n: 2, d: 1}
```
The `??=` operator in JavaScript is the **nullish coalescing assignment operator**. It is a logical operator that **returns its right-hand side operand** when its **left-hand side operand** is `null` or `undefined`.

```js showLineNumbers
let x = null;
x ??= 5;
console.log(x); // 5

let y = undefined;
y ??= 10;
console.log(y); // 10

let z = 15;
z ??= 20;
console.log(z); // 15
```

### Resources

1. [My Favorite JavaScript Tips and Tricks](https://blog.greenroots.info/my-favorite-javascript-tips-and-tricks)


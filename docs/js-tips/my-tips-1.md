---
sidebar_position: 5
sidebar_label: 'My Tips - 1'
---

# My Tips - 1

## Logical operators

All values in Javascript are either `truthy` or `falsy`.

### Logical operators - Simplified

:::tip
`a && b` evaluates to the **first falsy** operand<br></br>
`a || b` evaluates to the **first truthy** operand<br></br>

```js
console.log(1&&2&&3&&13) // will result 13 (last value)
console.log(1||2||3||13) // will result 1(first value)
```
:::

### Truthy and Falsy Values

The following **7 values** are considered **falsy**

* `false` - boolean 
* `0`, `-0` & `0n` - number 0, number -0 & bigint 0  
* `''`, `""` & \`\` - empty string
* `null`
* `undefined`
* `NaN`

All other values are considered truthy!

* `[]`, `{}` & `' '` (white space string) are also considered to be truthy.

```js showLineNumbers
Boolean(false) // false
!!false // false
Boolean('false') // true
!!0 // false
Boolean('0') // true
Boolean('') // false
Boolean(' ') // true
!![] // true
Boolean({}) // true
!!NaN // false
Boolean(null) // false
```

### Resources

1. [My Favorite JavaScript Tips and Tricks](https://blog.greenroots.info/my-favorite-javascript-tips-and-tricks)

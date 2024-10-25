---
sidebar_position: 7
sidebar_label: 'Typescript Types'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Highlight from '@site/src/components/Highlight';

# Typescript Types

## Mapped Types

In TypeScript, you can define an object type where the keys are strings and the values are also strings using an index signature:

```ts
interface StringObject {
  // highlight-next-line
  [key: string]: string;
}

const myObject: StringObject = {
  name: "Mariappan",
  city: "Tamilnadu"
};
```
Explanation:
    - `[key: string]: string;`: This is an index signature. It defines that any key within the object must be a string, and the corresponding value associated with that key must also be a string.
    - `StringObject`: This is an interface that acts as a blueprint for the object you want to create.
    - `myObject`: This is an object that conforms to the `StringObject` interface.


## Wiki

1. [Exploring [key:string]: any in TypeScript](https://dev.to/tlylt/exploring-key-string-any-in-typescript-4ake)
2. [Mapped Types - official](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
3. [Index Signatures](https://basarat.gitbook.io/typescript/type-system/index-signatures)
4. [Enforcing the type of the indexed members of a Typescript object? - stackoverflow](https://stackoverflow.com/questions/13315131/enforcing-the-type-of-the-indexed-members-of-a-typescript-object)
5. [TypeScript Function Types: A Beginner's Guide](https://dmitripavlutin.com/typescript-function-type/)

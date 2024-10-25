---
sidebar_position: 9
sidebar_label: 'Support Functions'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Highlight from '@site/src/components/Highlight';

# Support Functions

## Capitalizing the first letetr (Titlecase)

<Tabs>
  <TabItem value="titlecase" label="Titlecase" default>
    ```ts
    export const capitalize1stLetter = (words: string = 'unkown user') => {
      const wordArray = words.split(' ');
      const capitalArray: string[] = [];
      wordArray.forEach(word => capitalArray.push(word.charAt(0).toUpperCase() + word.slice(1)));
      return capitalArray.join(' ');
    };
    ```
  </TabItem>
  <TabItem value="output" label="output">
    ```ts
    const mySkills = ['angular', 'Node Js', 'CSS'];

    console.log(shuffleArrayEls(mySkills));

    // Output
    // ["CSS", "angular", "Node Js"] 
    ```
  </TabItem>
</Tabs>

## Shuffling Array Elements

<Tabs>
  <TabItem value="shuffle" label="Shuffle Logic" default>
    ```ts
    const shuffleArrayEls = (skills: string[]) => {
      return skills
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
    };
    ```
  </TabItem>
  <TabItem value="output" label="output">
    ```ts
    const myName = 'anand raja';

    console.log(capitalize1stLetter(myName));

    // Output
    // Anand Raja
    ```
  </TabItem>
</Tabs>
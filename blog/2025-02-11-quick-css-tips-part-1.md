---
slug: quick-css-tips-part-1
title: Quick CSS Tips - part 1
authors: anand
tags: ['css', 'scss', 'sass']
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

## <Highlight color='#800031' highlight='fg' fontWeight='bold'> Changing the color of checkbox if checked </Highlight>

<Tabs lazy>
  <TabItem value="html" label="HTML" default>
    ```html
    <label for="checkbox1" class="checkbox">
      <input id="checkbox1" type="checkbox" role="checkbox" />
      <span class="custom"> Checkbox </span>
    </label>
    ```
  </TabItem>
  <TabItem value="css1" label="CSS 1">
    ```css
    input[type="checkbox"]#checkbox1:checked + span {
      border-color: green;
      background-color: green;
    }
    ```
  </TabItem>
  <TabItem value="css2" label="CSS 2">
    ```css
    input[type="checkbox"]#checkbox1:checked ~ span {
      border-color: green;
      background-color: green;
    }
    ```
  </TabItem>
</Tabs>

{/* truncate */}
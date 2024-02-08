---
sidebar_position: 13
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sassy CSS

* `SASS` -> Systematically Awesome Style Sheets
* `SCSS` -> Sassy Cascading Style Sheets

### Nested Properties

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
    $full-width: 100%;

    .mobile-nav__items {
      width: 90%;
      height: $full-width;
      display: flex;
      flex: {
        direction: column;
        wrap: nowrap;
      }
    }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
    .mobile-nav__items {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  ```
  </TabItem>
</Tabs>

### Lists & Maps

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
    $border-size: 1.5px;

    // map
    $color: (green-dark: #0e4f1f, red-bright: #ff1b68);

    // List
    $border-default: $border-size solid map-get($color, green-dark);


    .button {
      background: map-get($color, red-bright);
      color: white;
      font: inherit;
      border: $border-size solid map-get($color, green-dark);
      padding: .5rem;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
    .button {
      background: #ff1b68;
      color: white;
      font: inherit;
      border: 1.5px solid #0e4f1f;
      padding: 0.5rem;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
  ```
  </TabItem>
</Tabs>

### Built-in functions

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
  .background {
    $dark-green: #0e4f1f;
    background: lighten($dark-green, 72%);
  }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
  .background {
    background: #d5f8de;
  }
  ```
  </TabItem>
</Tabs>

* [SCSS/SASS built-in functions - github](https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46)
* [SASS built-in modules](https://sass-lang.com/documentation/modules/)

### Arithmetic operations in SASS/SCSS

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
  $border-size: 1rem;

  .maths {
    border-radius: $border-size * 3;
  }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
  .maths {
    border-radius: 3rem;
  }
  ```
  </TabItem>
</Tabs>

### Media query in SASS/SCSS

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
  .container {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    @media (min-width: 40rem) {
      flex-direction: column;
      font-size: 10px;
    }
  }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
  .container {
    display: flex;
    flex-direction: row;
    font-size: 15px;
  }

  @media (min-width: 40rem) {
    .container {
      flex-direction: column;
      font-size: 10px;
    }
  }
  ```
  </TabItem>
</Tabs>


### Inheritance in SCSS/SASS

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
  $color: (green-dark: #0e4f1f, red-bright: #ff1b68);
  $border-size: 1.5px;

  .sass-section {
    font-family: 'Montserrat', sans-serif;
    border: $border-size solid map-get($color, green-dark);
    width: 50px;
  }

  .box1 {
    @extend .sass-section;
    height: 60px;
  }

  .box2 {
    @extend .sass-section;
    height: 70px;
  }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
  .sass-section, .box1, .box2 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
  }

  .box1 {
    height: 60px;
  }

  .box2 {
    height: 70px;
  }

  /* OR */

  .box1 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
    height: 60px;
  }
  .box2 {
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #0e4f1f;
    width: 50px;
    height: 70px;
  }
  ```
  </TabItem>
</Tabs>


### Mixins

<Tabs>
  <TabItem value="scss" label="SCSS">
  ```scss
  $dark-green: #0e4f1f;

  // mixin without arguments
  @mixin display-flex() {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .container {
    @include display-flex();
    flex-direction: column;
  }

  // mixin with arguments
  @mixin media-min-width($width) {
    @media (min-width: $width) {
      border: 2px solid green;
      @content;
    }
  }

  body {
    background: $dark-green;
    font-size: 15px;

    @include media-min-width(40rem) {
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
    }
  }
  ```
  </TabItem>
  <TabItem value="css" label="CSS">
  ```css
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
  }

  body {
    background: #0e4f1f;
    font-size: 15px;
  }

  @media (min-width: 40rem) {
    body {
      border: 2px solid green;
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
    }
  }
  ```
  </TabItem>
</Tabs>


1. [CSS `@import` Rule](https://www.w3schools.com/cssref/pr_import_rule.php)
2. [Using SASS partials](https://dev.to/sarah_chima/using-sass-partials-7mh)
3. [Sass @import and Partials](https://www.w3schools.com/sass/sass_import.php)

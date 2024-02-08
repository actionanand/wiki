---
sidebar_position: 8
---

# Custom Font

```css
  font: italic small-caps 400 1.2rem/2 'Montserrat', sans-serif;
```
the order will be as below:

```css
  font: font-style font-variant font-weight font-size/line-height font-family; 
```

* `font-size` and `font-family` should be there in the short-hand

### Generic Families & Font Families

![image](https://github.com/actionanand/css-uhost/assets/46064269/3a056466-7b0e-4b84-8e46-db0ef211f587)

### Font Display

![image](https://github.com/actionanand/css-uhost/assets/46064269/6803a4ef-74cc-4686-bf84-75e935522d9f)

|              | **Block Period**    | **Swap Period**     | **Outcome**                                                                                         |
|--------------|---------------------|---------------------|-----------------------------------------------------------------------------------------------------|
| **block**    | short               | infinite            | FOIT, Layout shifts                                                                                 |
| **swap**     | none                | infinite            | FOUT, Layout shifts                                                                                 |
| **fallback** | extremely short     | short               | Minimize the risk of layout shift & invisible texts                                                 |
| **optional** | extremely short     | none                | Minimize the risk of layout shift & invisible texts(even better than `fallback`, as no swap period) |
| **auto**     | based on user agent | based on user agent | based on user agent                                                                                 |


1. [Controlling Font Performance with font-display](https://developer.chrome.com/blog/font-display)
2. [Font loading strategies: FOIT and FOUT](https://dev.to/ibn_abubakre/font-loading-strategies-foit-and-fout-393b)
    - **FOIT** - Flash Of Invisible Text
    - **FOUT** - Flash Of Unstyled Text
3. [Optimize web fonts loading - YouTube](https://www.youtube.com/watch?v=wnpMeYARV4g)


```css
@font-face {
  font-family: 'Belta bold';
  src: url('../fonts/belta-bold-cufonfonts/belta-regular.ttf');
  src: url('../fonts/belta-bold-cufonfonts/belta-regular.woff2') format('woff2'),
       url('../fonts/belta-bold-cufonfonts/belta-regular.woff') format('woff'),
       url('../fonts/belta-bold-cufonfonts/belta-regular.otf') format('opentype'),
       url('../fonts/belta-bold-cufonfonts/belta-regular.ttf') format('truetype'),
       url('../fonts/belta-bold-cufonfonts/belta-regular.eot') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Belta bold';
  src: url('../fonts/belta-bold-cufonfonts/belta-light.ttf');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Belta bold';
  src: url('../fonts/belta-bold-cufonfonts/belta-bold.ttf');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

### Summary

![image](https://github.com/actionanand/css-uhost/assets/46064269/74c29804-e812-47ac-b5c8-17450bc1ca9a)

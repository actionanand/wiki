---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Background and Image

### The Background Property


:::note[Background Property]

<Tabs>
  <TabItem value="background" label="Background">
    ```css title="main.css" {2,3-8}
    #product-overview {
      background-image: url("./shared/images/freedom.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left 15% top 20%;
      background-origin: padding-box;
      background-clip: border-box;
      background-attachment: scroll; 
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
  <TabItem value="background-short" label="Background Shorthand">
    ```css
    #product-overview {
      // highlight-next-line
      background: url("./shared/images/freedom.jpg") left 15% top 20%/cover no-repeat padding-box border-box scroll;
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
  <TabItem value="background-backup" label="Background with Backup color">
    ```css
    #product-overview {
      // highlight-start
      background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url("./shared/images/freedom.jpg") left 15% top 20%/cover no-repeat padding-box border-box scroll, #ff1b68;
      // highlight-end
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
</Tabs>

:::

1. [The background Property - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2. [Styling Images - w3 schools](https://www.w3schools.com/css/css3_images.asp)
3. [Filters - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
4. [Styling SVG - mdn](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

### Summary 
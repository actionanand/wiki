---
sidebar_position: 15
sidebar_label: 'Media Query'
title: Media Queries in Depth
---

A **media query** is a CSS technique used to apply styles based on the characteristics of the user's device, such as screen size, resolution, orientation, or other properties. Media queries are essential for creating responsive designs that adapt to different screen sizes and devices.

---

### **Basic Syntax**
```css
@media (condition) {
  /* CSS rules */
}
```

---

### **Common Media Query Examples**

#### 1. **Targeting Screen Sizes**
- **Mobile Devices**:
  ```css
  @media (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
  ```

- **Tablets**:
  ```css
  @media (min-width: 601px) and (max-width: 1024px) {
    body {
      background-color: lightgreen;
    }
  }
  ```

- **Desktops**:
  ```css
  @media (min-width: 1025px) {
    body {
      background-color: lightyellow;
    }
  }
  ```

---

#### 2. **Orientation**
- **Portrait Mode**:
  ```css
  @media (orientation: portrait) {
    body {
      font-size: 16px;
    }
  }
  ```

- **Landscape Mode**:
  ```css
  @media (orientation: landscape) {
    body {
      font-size: 18px;
    }
  }
  ```

---

#### 3. **High-Resolution Screens (Retina Displays)**
- **Targeting High DPI Screens**:
  ```css
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    img {
      width: 100%;
      height: auto;
    }
  }
  ```

---

### **Best Practices**
1. **Mobile-First Design**:
   - Start with styles for smaller screens and add media queries for larger screens.
   ```css
   body {
     font-size: 14px;
   }

   @media (min-width: 768px) {
     body {
       font-size: 16px;
     }
   }
   ```

2. **Avoid Overlapping Breakpoints**:
   - Ensure breakpoints do not overlap to avoid conflicting styles.

3. **Test Across Devices**:
   - Use browser developer tools to test your media queries on different screen sizes and orientations.

---

### **Responsive Breakpoints (Common Standards)**

| **Device**       | **Breakpoint**         |
|-------------------|------------------------|
| Mobile (Small)    | `max-width: 600px`     |
| Tablet (Medium)   | `min-width: 601px` and `max-width: 1024px` |
| Desktop (Large)   | `min-width: 1025px`    |

---

## **Media Queries in Depth with SASS**

SASS (Syntactically Awesome Stylesheets) enhances the use of media queries by providing features like variables, mixins, and nesting, making your CSS more modular and maintainable.

---

### **1. Basic Media Query in SASS**
You can write media queries in SASS just like in plain CSS.

```scss
// Example: Basic Media Query
body {
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
}
```

---

### **2. Nesting Media Queries**
SASS allows you to nest media queries inside selectors, making the code more readable and organized.

```scss
// Example: Nested Media Query
.container {
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
}
```

---

### **3. Using Variables in Media Queries**
You can define breakpoints as variables to maintain consistency across your styles.

```scss
// Define Breakpoints
$mobile: 600px;
$tablet: 768px;

// Use Variables in Media Queries
.container {
  padding: 20px;

  @media (max-width: $mobile) {
    padding: 10px;
  }

  @media (max-width: $tablet) {
    padding: 15px;
  }
}
```

---

### **4. Media Query Mixins**
Mixins in SASS allow you to reuse media query logic across multiple selectors.

```scss
// Define a Mixin for Breakpoints
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 600px) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: 768px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}

// Use the Mixin
.container {
  padding: 20px;

  @include respond-to(mobile) {
    padding: 10px;
  }

  @include respond-to(tablet) {
    padding: 15px;
  }
}
```

---

### **5. Combining Media Queries**
SASS allows you to combine multiple media queries for better organization.

```scss
// Example: Combining Media Queries
$mobile: 600px;
$tablet: 768px;

.container {
  padding: 20px;

  @media (max-width: $mobile), (max-width: $tablet) {
    padding: 10px;
  }
}
```

---

### **6. Using Media Queries with SASS Maps**
SASS maps allow you to store breakpoints in a structured way and use them dynamically.

```scss
// Define Breakpoints as a Map
$breakpoints: (
  mobile: 600px,
  tablet: 768px,
  desktop: 1024px
);

// Mixin to Use Breakpoints from the Map
@mixin respond-to($breakpoint) {
  @media (max-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Use the Mixin
.container {
  padding: 20px;

  @include respond-to(mobile) {
    padding: 10px;
  }

  @include respond-to(tablet) {
    padding: 15px;
  }
}
```

---

### **7. Orientation Media Queries**
You can target specific orientations like portrait or landscape.

```scss
// Example: Orientation Media Queries
.container {
  @media (orientation: portrait) {
    background-color: lightblue;
  }

  @media (orientation: landscape) {
    background-color: lightgreen;
  }
}
```

---

### **8. High-Resolution Media Queries**
Target high-resolution screens (e.g., Retina displays).

```scss
// Example: High-Resolution Media Query
.container {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url('high-res-image.png');
  }
}
```

---

### **9. Responsive Typography**
You can use media queries to adjust font sizes for different screen sizes.

```scss
// Example: Responsive Typography
h1 {
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
}
```

---

### **10. Example: Full Responsive Design with SASS**
Here’s a complete example of a responsive design using SASS:

```scss
// Define Breakpoints
$breakpoints: (
  mobile: 600px,
  tablet: 768px,
  desktop: 1024px
);

// Mixin for Breakpoints
@mixin respond-to($breakpoint) {
  @media (max-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

// Styles
.container {
  padding: 20px;
  font-size: 16px;

  @include respond-to(mobile) {
    padding: 10px;
    font-size: 14px;
  }

  @include respond-to(tablet) {
    padding: 15px;
    font-size: 15px;
  }

  @include respond-to(desktop) {
    padding: 25px;
    font-size: 18px;
  }
}
```

---

### **Best Practices**
1. **Mobile-First Design**:
   - Start with styles for smaller screens and add media queries for larger screens.

2. **Use Variables and Mixins**:
   - Define breakpoints as variables or maps for consistency.
   - Use mixins to avoid repetitive code.

3. **Test Across Devices**:
   - Use browser developer tools to test your media queries on different screen sizes.

4. **Keep Media Queries Organized**:
   - Group related media queries together for better maintainability.

---

### **Tools for Testing Media Queries**
1. **Browser Developer Tools**:
   - Use the "Responsive Design Mode" in Chrome, Firefox, or Edge.

2. **Online Tools**:
   - [Screenfly](https://screenfly.org/)
   - [Responsinator](https://www.responsinator.com/)

---

By leveraging SASS features like variables, mixins, and maps, you can write clean, reusable, and maintainable media queries for responsive designs.
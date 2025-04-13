# SCSS/SASS Interview Questions and Answers

## 1. What is SASS and SCSS?
**Answer:**
SASS (Syntactically Awesome Stylesheets) is a preprocessor scripting language that extends CSS by adding features like variables, nested rules, mixins, functions, and more. SCSS (Sassy CSS) is a syntax of SASS that is more similar to traditional CSS.

Sass(Syntactically Awesome Stylesheets) is a preprocessor scription language that extends CSS by addng features like variables, nested rules, mixins, functions, and more. SCSS(Sassy CSS) is a syntax of SASS that is more similar to traditional CSS
## 2. What are the differences between SASS and SCSS?
**Answer:**
- SCSS uses a syntax similar to CSS, whereas SASS uses indentation-based syntax.
- SCSS files have the `.scss` extension, while SASS files use `.sass`.
- SCSS supports braces `{}` and semicolons `;`, whereas SASS does not.

## 3. What are variables in SASS/SCSS?
**Answer:**
Variables allow you to store values (such as colors, fonts, etc.) and reuse them throughout your stylesheets.

```scss
$primary-color: #3498db;
body {
  background-color: $primary-color;
}
```

## 4. What are mixins in SASS/SCSS?
**Answer:**
Mixins are reusable chunks of CSS that you can include in multiple selectors to avoid code duplication.

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

## 5. What are nested rules in SASS/SCSS?
**Answer:**
Nesting allows you to write CSS selectors inside other selectors, improving readability and maintainability.

```scss
nav {
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
}
```

## 6. How do you use functions in SASS/SCSS?
**Answer:**
Functions allow you to perform calculations and return values for use in styles.

```scss
@function calculate-padding($size) {
  @return $size * 2;
}

.box {
  padding: calculate-padding(10px);
}
```

## 7. What are placeholders in SASS/SCSS?
**Answer:**
Placeholders (`%`) are similar to mixins but do not generate CSS unless extended by other selectors.

```scss
%button-style {
  padding: 10px;
  border-radius: 5px;
}

.button {
  @extend %button-style;
}
```

## 8. What is the difference between `@extend` and `@mixin`?
**Answer:**
- `@mixin` allows code reuse with parameters and can be included multiple times.
- `@extend` inherits styles from another selector but cannot take parameters.

## 9. How can you use SASS/SCSS with React?
**Answer:**
- Install node-sass: `npm install node-sass`
- Import SCSS files into React components: `import './styles.scss';`

## 10. What is the `@import` and `@use` directive in SCSS?
**Answer:**
- `@import` is used to split CSS into multiple files but has performance drawbacks.
- `@use` is a newer alternative that avoids global namespace pollution.

```scss
@use 'variables';
@import 'mixins';
```

## 11. How do you optimize SCSS for better performance?
**Answer:**
- Minimize nested selectors to avoid deep CSS structures.
- Use `@use` instead of `@import`.
- Avoid excessive `@extend` usage.
- Keep mixins and functions efficient.

---
This guide covers essential SCSS/SASS interview topics. Let me know if you need more details! 🚀


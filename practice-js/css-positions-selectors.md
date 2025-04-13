# CSS Positions & Selectors - Top Interview Questions and Answers

## 1️⃣ What are the different types of CSS position properties?
### **Answer:**
CSS provides five position values:

- **static**: Default positioning (normal document flow).
- **relative**: Positioned relative to its normal position.
- **absolute**: Positioned relative to the nearest positioned ancestor.
- **fixed**: Positioned relative to the viewport (doesn’t move on scroll).
- **sticky**: Acts like relative until a scroll threshold is met, then becomes fixed.

### **Example:**
```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

---

## 2️⃣ What is the difference between absolute and relative positioning?
### **Answer:**
- **Relative**: Moves an element **relative to its original position**.
- **Absolute**: Moves an element **relative to the nearest positioned ancestor** or the document if no ancestor is positioned.

### **Example:**
```css
.relative-box {
  position: relative;
  top: 20px;
}
.absolute-box {
  position: absolute;
  top: 10px;
  left: 50px;
}
```

---

## 3️⃣ How does CSS `z-index` work?
### **Answer:**
`z-index` controls the **stacking order** of elements. Higher values bring elements to the front.

### **Example:**
```css
.box1 {
  position: absolute;
  z-index: 2;
}
.box2 {
  position: absolute;
  z-index: 1;
}
```
Here, `.box1` appears **above** `.box2`.

---

## 4️⃣ What are the different types of CSS selectors?
### **Answer:**
- **Universal Selector (`*`)**: Selects all elements.
- **Element Selector (`div, p`)**: Selects specific elements.
- **Class Selector (`.classname`)**: Selects elements with a specific class.
- **ID Selector (`#idname`)**: Selects an element with a specific ID.
- **Attribute Selector (`[type='text']`)**: Selects elements with a specific attribute.
- **Group Selector (`h1, h2`)**: Applies styles to multiple elements.
- **Combinators**:
  - **Descendant (`div p`)**: Selects `<p>` inside `<div>`.
  - **Child (`div > p`)**: Selects direct children.
  - **Adjacent Sibling (`h1 + p`)**: Selects first `<p>` after `<h1>`.
  - **General Sibling (`h1 ~ p`)**: Selects all `<p>` after `<h1>`.

---

## 5️⃣ What is the difference between `em`, `rem`, `px`, `%`, and `vw/vh` in CSS?
### **Answer:**
- **px**: Absolute unit.
- **em**: Relative to the font-size of the parent.
- **rem**: Relative to the root element (`html`).
- **%**: Relative to the parent element.
- **vw/vh**: Viewport width/height.

### **Example:**
```css
.box {
  font-size: 2em; /* 2 times parent font size */
}
```

---

## 6️⃣ What is specificity in CSS?
### **Answer:**
Specificity determines which CSS rule applies when multiple rules target the same element.
- **Inline styles (`1000`)**
- **ID selectors (`100`)**
- **Class, pseudo-class (`10`)**
- **Element selectors (`1`)**

### **Example:**
```css
#id { color: red; }   /* Specificity: 100 */
.class { color: blue; } /* Specificity: 10 */
p { color: green; }   /* Specificity: 1 */
```
Here, `#id` wins over `.class` and `p`.

---

## 7️⃣ What is the difference between `nth-child()` and `nth-of-type()`?
### **Answer:**
- `nth-child(n)`: Selects the nth child **regardless of type**.
- `nth-of-type(n)`: Selects the nth child **of a specific type**.

### **Example:**
```css
p:nth-child(2) { color: red; }  /* Selects second child if it is <p> */
p:nth-of-type(2) { color: blue; } /* Selects second <p> */
```

---

## 8️⃣ What are pseudo-classes and pseudo-elements?
### **Answer:**
- **Pseudo-classes**: Define a special state of an element (e.g., `:hover`, `:focus`).
- **Pseudo-elements**: Target a specific part of an element (`::before`, `::after`).

### **Example:**
```css
a:hover { color: red; }  /* Pseudo-class */
p::first-letter { font-size: 2em; } /* Pseudo-element */
```

---

## 9️⃣ How can you center a div in CSS?
### **Answer:**
### **Using Flexbox:**
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### **Using Grid:**
```css
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

### **Using Positioning:**
```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## 🔟 What is the difference between `visibility: hidden;` and `display: none;`?
### **Answer:**
- `visibility: hidden;` hides the element but keeps its space.
- `display: none;` removes the element from the document flow.

### **Example:**
```css
.hidden-box {
  visibility: hidden;
}
.none-box {
  display: none;
}
```

---

### 🎯 **Conclusion:**
Understanding **positions, selectors, specificity, pseudo-elements, and centering techniques** is crucial in CSS. These concepts are frequently asked in interviews and play a big role in real-world UI/UX design.

🚀 **Happy Coding!** 🎉
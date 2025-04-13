# TypeScript - Top 10 Interview Questions and Answers

## 1️⃣ What is TypeScript and why use it?
### **Answer:**
TypeScript is a **strongly typed superset** of JavaScript that compiles down to plain JavaScript. It provides static typing, interfaces, and advanced object-oriented programming features to enhance JavaScript development.

### **Why use TypeScript?**
- **Static Typing**: Detects errors during development.
- **Improved Code Readability**: Enhances maintainability.
- **Modern Features**: Supports ES6+ features.
- **Better IDE Support**: Autocompletion and inline documentation.
- **Scalability**: Useful for large projects.

---

## 2️⃣ What are the key differences between TypeScript and JavaScript?
### **Answer:**
| Feature       | TypeScript | JavaScript |
|--------------|------------|------------|
| **Typing**   | Statically typed | Dynamically typed |
| **Compilation** | Needs compilation (`.ts` → `.js`) | No compilation needed |
| **Interfaces** | Supports interfaces & types | No support for interfaces |
| **Error Handling** | Errors detected at compile-time | Errors appear at runtime |
| **OOP Features** | Supports classes, interfaces, generics | Limited OOP support |

---

## 3️⃣ What are Interfaces in TypeScript?
### **Answer:**
Interfaces in TypeScript define the **structure of an object**. They enforce type-checking and allow code reuse.

### **Example:**
```typescript
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

const user: User = {
    id: 1,
    name: "John Doe"
};
```

---

## 4️⃣ What are Type Aliases in TypeScript?
### **Answer:**
Type Aliases define custom types, similar to interfaces, but can also be used for primitive types, unions, and tuples.

### **Example:**
```typescript
type ID = number | string;
type User = {
    id: ID;
    name: string;
};
```

---

## 5️⃣ What is the difference between `type` and `interface` in TypeScript?
### **Answer:**
| Feature       | Type Alias (`type`) | Interface (`interface`) |
|--------------|----------------|----------------|
| **Usage** | Can define primitive types, unions, tuples, objects | Only for object shapes |
| **Extensibility** | Cannot be extended | Can be extended via `extends` |
| **Merging** | Cannot merge types | Interfaces can be merged |

### **Example:**
```typescript
// Using type
type Point = { x: number; y: number };

// Using interface
interface Point { x: number; y: number; }
```

---

## 6️⃣ What are Generics in TypeScript?
### **Answer:**
Generics allow us to create reusable components that work with multiple data types.

### **Example:**
```typescript
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(5));  // Output: 5
console.log(identity<string>("Hello"));  // Output: Hello
```

---

## 7️⃣ What is the `unknown` type in TypeScript?
### **Answer:**
The `unknown` type is a safer alternative to `any`. It forces developers to check the type before using it.

### **Example:**
```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Type-safe usage
}
```

---

## 8️⃣ What are Mapped Types in TypeScript?
### **Answer:**
Mapped types allow us to create new types based on an existing type.

### **Example:**
```typescript
type User = {
    id: number;
    name: string;
};

type ReadonlyUser = { readonly [K in keyof User]: User[K] };
```

---

## 9️⃣ How do you enforce strict null checking in TypeScript?
### **Answer:**
Enable `strictNullChecks` in `tsconfig.json`. This prevents assigning `null` or `undefined` to non-nullable types.

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

---

## 🔟 What is Type Assertion in TypeScript?
### **Answer:**
Type Assertion tells the TypeScript compiler to treat a variable as a specific type.

### **Example:**
```typescript
let value: any = "Hello TypeScript";
let strLength: number = (value as string).length;
```

---

### 🎯 **Conclusion:**
Mastering TypeScript improves code quality and maintainability. Understanding concepts like interfaces, types, generics, mapped types, and strict null checking will help in real-world applications and interviews.

🚀 **Happy Coding!** 🎉


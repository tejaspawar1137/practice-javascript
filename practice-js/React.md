# 1) What Is React ?
=> React is an open source front end javascript library that is used for building composable user interfaces, especially for single page applications. it is used for handling view layer for web and mobiles apps based on components in a declarative appraoch.

# 2) What is declarative approach in react ?
=> Declarative programming is when your code shows what you want to happen. Imperative programming your code shows exactly how to do and what you wanted to happen.

# 3) what is composable user interface ?
=> Composable user interfaces are built using modular, reusable components that can be easily combined to create complex user interfaces, promoting flexibility and maintainability in UI development.

# 4) What is modular in js ?
=> A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

# 5) What is the history behind react evolution ?
=> The history of react was started on 2010 with the creation of XHP. XHP is a PHP extension which improved the syntax of the language such that XML language document fragment become valid PHP expressions and the primary purpose was to create cutom and reusable HTML Elements.

  But there was a different problem with XHP in which dynamic web applications requires many roundtrips to the server and XHP did not solve this problem and Also the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name FaxJ by jorden inspired from XHP. Finally after some time React has been introduced as a new Library into javascript world


# 6) What is the major feature of react ?
=>  The Major Features of React are: 
   > Uses JSX syntax, a syntax extension of js that allows developers to write HTML in their js code.
   > It uses virtual DOM instead of the real DOM considering that Real DOM manipulations are expensive.
   > Supports server side rendering which is useful for search engine optimation (SEO).
   > Follows unidirectional or one-way flow of data-binding.
   > Uses Reusable/composable UI components to develop the view.


# 7) What is jsx ?
=> JSX stands for javascript XML and it is an XML like syntax extension to Echascript. Basically it just provides the syntactic sugar for React.createElement

# 8) What is the difference between Element and Component ?
=>  
   () element: 
   > An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props

   () component:
   > whereas a component can be declared in several differant ways. it can be a class based with a render() method or can be defined as a function. in either case, it takes props as an input, and returs jsx tree as the output.

# 9) What to create components in react ?
=> () functional component: 
> This is the simplest way to create a component. Those are pure javacript functions that accept props object as the one and one only parameter and returns React elements to render the output.

   () Class Components:
   > we can also use ES6 class to define a component and we have a render() to render React elements

# 10) When to use Class component over Functional Component in react ?
=> After the addition of hooks it is always recommended tu use functional copmonent over clas components in react. Becaues you could use state and lifecycle method and other features that were  only available in class component presnet in function component too


# 11) What are pure components ?
=> Pure components are the components which render the same output for the same state and props. in function component, you can achieve this pure components through Memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. so it be helpful for performance optimization.
   But at the same time it won't compare the previous state with the current state cause function component itself prevents the uncessary rendering by default when you set the same state again.

# 12) What is state in react ?
=> State of a component is an object that holds some information that may change over the lifetime of the component. the important point is whenever the state object changes, the component re-renders. it is always recommended to make our state as simple as possible and minimize the number of stateful components.


# 13) What are props in react ?
=> Props are inputs to components. They are single values or object containing a set of values that are passed to components on creation similar to HTML Tag attributes. The data is passed down from parent component to a child component.

# 14) What is the difference between state and props ?
=> In React, The state and the props are plain javascript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.

   > State: The state entity managed by the component itself and can be updated using the setState() for class Component function. Unline props, state can be modified by the component and is used to manage the internal state of the component. state acts as a component's memory. moveover changes in the state trigger a re-render of the component and it's child component. The component cannot become reusable with state usage of state alone.

   > Props: On the other hand props(properties) are passed to a component by its parent component and are (read only), meaning they cannnot by modified by the own component itself. props acts as arguments for a function. also props can be used to configure the behaviour of a component and to pass data between components. the component become reusable with usage of props.


# 15 ) what is the difference between HTML and React Event Handler ?
=>  
   > HTML: In HTML, the event name usually represents in lowercase as a convension.
   > React Event Handler: Whereas in React it follows camelCase convention:

# 16) What are synthetic Events in React ?
=> SyntheticEvent is a "cross-browser wrapper" around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers. The native events can be accessed directly from synthetic events using nativeEvent attribute


# 17) What are inline conditional expression ?
=> You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.


# 18) What is "key" prop and what is the benefit of using it in arrays of elements? 

=> A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.

# 19) What is virtual DOM in react ?
=> The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.


# 20) How does virtual dom works?
=> The Virtual DOM works in three simple steps.

i) Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
ii)Then the difference between the previous version of the virtual DOM representation and the new  one is calculated.
iii)Once the calculations are done, the real DOM will be updated with only the things that have actually changed.


# 21) What is the difference between Shadow DOM and Virtual DOM?
=> 
 > The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.

 > The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.


# 22) What is React fiber ?
=> Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

# 23) What is the main goal of React fiber ?
=> The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

i)Ability to split interruptible work in chunks.
ii)Ability to prioritize, rebase and reuse work in progress.
iii)Ability to yield back and forth between parents and children to iv)iv)iv)support layout in React.
v)Ability to return multiple elements from render().
vi)Better support for error boundaries.

# 24) What are controlled components ?
=> A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

The controlled components will be implemented using the below steps,

1)Initialize the state using useState hooks in function components or 2)2)2)inside constructor for class components.
3)Set the value of the form element to the respective state variable.
4)Create an event handler to handle the user input changes through 5)5)5)5)useState updater function or setState from class component.
6)Attach the above event handler to form elements change or click events

25) What are uncontrolled Component ?
=> The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

1)The uncontrolled components will be implemented using the below steps,
Create a ref using useRef react hook in function component or React.2)2)2)2)createRef() in class based component.
3)Attach this ref to the form element.
4)The form element value can be accessed directly through ref in event handlers or componentDidMount for class components

# 26) What are higher order components ?
=> A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

()HOC can be used for many use cases:

1)Code reuse, logic and bootstrap abstraction.
2)Render hijacking.
3)State abstraction and manipulation.
4)Props manipulation.

# 27) What is reconcialation ?
=> Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

# 28) Why React uses className over class attribute? 
=> The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reserved words, it is recommended to use camelCase wherever applicable in JSX code. The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principle reason why React uses className instead of class. Pass a string as the className prop.

# 29) What are fragments ?
=> It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either <Fragment> or a shorter syntax having empty tag (<></>).


# 30) What are portals in React ?
=> Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up.

Portal is a recommended way to render children into a DOM node that exists outi


# 31) What is stateless components ?
=> If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.


# 32) What are stateful components ?
=> If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.


# 33) What are the advantages of react ?
=> 
>Increases the application's performance with Virtual DOM.
>JSX makes code easy to read and write.
>It renders both on client and server side (SSR).
>Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
>Easy to write unit and integration tests with tools such as Jest.


# 34) What are the limitations of react ?
=>
> React is just a view library, not a full framework.
>There is a learning curve for beginners who are new to web development.
>Integrating React into a traditional MVC framework requires some additional configuration.
>The code complexity increases with inline templating and JSX.
>Too many smaller components leading to over engineering or boilerplate.


# 35) What are react mixins ?
=> Mixins are a way to totally separate components to have a common functionality. Mixins should not be used and can be replaced with higher-order components or decorators.

One of the most commonly used mixins is PureRenderMixin. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:

# 36) why props can't be updated in react ?
=> The React philosophy is that props should be immutable(read only) and top-down. This means that a parent can send any prop values to a child, but the child can't modify received props.


# 37) What is the lifecycle method in react ?
=> 
>React Component Lifecycle Phases
>React components go through three main phases in their lifecycle:

1️⃣ Mounting (Component is created and inserted into the DOM)
This happens when the component is first rendered.
In functional components, useEffect(() => {}, []) is used to mimic componentDidMount.

2️⃣ Updating (Component re-renders due to state or prop changes)
Happens when the component's state or props change.
useEffect(() => {}, [dependency]) handles updates based on specific dependencies.

3️⃣ Unmounting (Component is removed from the DOM)
Occurs when the component is no longer needed.
A cleanup function inside useEffect (return () => {}) handles unmounting behavior.
These three phases—Mounting, Updating, and Unmounting—define how a React component behaves throughout its lifecycle. 🚀




1. Limitations of React in Large Apps
React needs extra tools for routing and state management. Managing complex state can get messy. Too many re-renders can slow things down. JSX might confuse new developers. Frequent updates require constant learning.

2. Virtual DOM & Benefits
React creates a lightweight copy of the real DOM. When changes happen, it compares the copy with the real DOM and updates only the parts that changed. This reduces slow DOM operations, making apps faster.

3. Hooks vs. Redux
Hooks work for small apps, but Redux is better for large apps with complex state. Redux offers tools for debugging and managing data flow. Hooks can’t fully replace Redux for very large projects.

4. State Management Best Practices

Keep state close to where it’s used.

Use React Context for global data (like user themes).

Use Redux only for very complex apps.

Avoid duplicating state.

Reuse logic with custom hooks.

5. Optimizing Performance

Use React.memo() to skip re-rendering unchanged components.

Use useMemo for heavy calculations and useCallback for functions.

Split code into smaller chunks loaded on demand (lazy loading).

Use virtualization for long lists (show only visible items).

Avoid passing new objects or functions as props frequently.

6. Strict Mode
A tool that checks for outdated practices during development. It runs some code twice to catch bugs early. Does not affect the final production build.

7. Preventing Unnecessary Re-renders

Wrap components in React.memo().

Use useCallback to reuse function references.

Avoid passing inline objects or arrays as props.

Use state management tools to limit updates.

8. Functional vs. Class Components

Functional: Simpler, use hooks, no lifecycle methods. Modern default.

Class: Older, use this keyword and lifecycle methods like componentDidMount.
Most new apps use functional components with hooks.

9. React Fiber
An update to React’s core that allows pausing and resuming work. This makes animations and user interactions smoother by prioritizing urgent tasks.

10. Handling Side Effects
Use useEffect for tasks like API calls or timers. Clean up after effects (e.g., cancel API requests) to avoid memory leaks.

11. useMemo vs. useCallback

useMemo saves the result of a calculation (e.g., filtering a list).

useCallback saves a function definition (e.g., event handlers). Both prevent unnecessary re-calculations.

12. Dynamic Forms & Validation
Store form data in state. Update state as users type. Check for errors (like empty fields) and display messages using conditional rendering.

13. Lazy Loading
Load parts of the app only when needed (e.g., when a user clicks a button). Reduces initial load time and saves bandwidth.

14. Error Boundaries
Special components that catch errors in their child components. They show a fallback UI (like an error message) instead of crashing the whole app. Only class components can be error boundaries today.

15. Server-Side Rendering (SSR)
Renders React on the server and sends HTML to the browser. Benefits:

Faster initial page load.

Better search engine optimization (SEO).

Works well on slow devices.

16. Styling Approaches

CSS Modules: Scoped styles to avoid naming conflicts.

Styled Components: Write CSS directly in JavaScript for dynamic styles.

Inline Styles: Simple but hard to reuse.

Sass/SCSS: Adds features like variables and nesting.

17. Sibling Communication Without Redux
Move shared state to the closest parent component. Alternatively, use React Context to share data between siblings without passing props manually.

18. useEffect for API Calls
Fetch data when a component loads by using useEffect with an empty dependency array. Handle loading and error states for better user experience.

19. Async Operations
Use async/await inside useEffect or chain Promises. Always clean up pending tasks (e.g., cancel API requests) to avoid errors after a component unmounts.

20. Re-render on Window Resize
Track window size in state. Add a resize event listener in useEffect to update the state when the window size changes. Remove the listener when the component unmounts.

21. Context API for State
Create a "context" to share data (like themes or user info) across many components without passing props manually. Wrap your app with a context provider and access data with useContext.

22. React Router & Dynamic Routing
Manages navigation in single-page apps. Dynamic routes (e.g., /products/:id) let you load different content based on URL parameters. Access parameters with hooks like useParams.

23. Controlled vs. Uncontrolled Components

Controlled: Form data is managed by React state (e.g., input values stored in state).

Uncontrolled: Form data is handled by the DOM (e.g., using refs to access input values).

24. Optimizing Large Lists
Only render items visible on the screen (virtualization). Libraries like react-window help achieve this. Avoid rendering thousands of items at once.

25. Shallow vs. Deep Comparison

Shallow: Checks if two objects have the same reference (used by React by default).

Deep: Checks if every property inside objects is the same (slower, rarely used).

26. Async State Updates
When updating state based on previous state (e.g., incrementing a counter), use the functional form of setState to avoid outdated values.

27. Custom Hooks
Reusable functions that combine built-in hooks. For example, create a useFetch hook to handle API calls and reuse it across components.

28. Higher-Order Components (HOCs)
Functions that take a component and return a new component with added features (e.g., logging, authentication). Less common today due to hooks.

29. Debounced Search
Wait for the user to stop typing (e.g., 500ms) before triggering a search. This reduces unnecessary API calls while the user is still typing.

30. Reconciliation
React’s process to update the DOM efficiently. It compares the new and old Virtual DOM, calculates the differences, and updates only what changed. Uses "keys" to track list items during reorders.
























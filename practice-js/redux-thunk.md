# Redux Thunk - Top 5 Interview Questions and Answers

## 1️⃣ What is Redux Thunk and why is it used?
### **Answer:**
Redux Thunk is a middleware for handling asynchronous logic in Redux applications. By default, Redux can only handle synchronous updates, but Redux Thunk allows us to write action creators that return **functions** instead of plain action objects. These functions can perform async operations (such as API calls) and dispatch actions based on the results.

### **Example:**
```javascript
const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        }
    };
};
```
---

## 2️⃣ How does Redux Thunk work internally?
### **Answer:**
Redux Thunk intercepts actions before they reach the reducer. If an action creator returns a function instead of an object, Redux Thunk executes that function, passing **dispatch** and **getState** as arguments. This allows the function to perform async operations and dispatch multiple actions at different stages.

### **Flow:**
1. The component dispatches an action.
2. Redux Thunk detects if the action is a function.
3. The function gets executed with `dispatch` and `getState`.
4. The function performs async logic and dispatches success or failure actions.
5. The reducer updates the state based on the dispatched actions.

---

## 3️⃣ What is the difference between Redux Thunk and Redux Saga?
### **Answer:**
| Feature       | Redux Thunk | Redux Saga |
|--------------|------------|------------|
| Type         | Middleware | Middleware |
| Syntax       | Uses async/await or Promises | Uses Generator functions (`function*`) |
| Complexity   | Simple, easy to learn | More complex but powerful |
| Use Case     | Good for basic API calls | Best for complex async flows, like WebSockets |

### **Example of Redux Saga:**
```javascript
function* fetchData() {
    try {
        const response = yield call(fetch, 'https://api.example.com/data');
        const data = yield response.json();
        yield put({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        yield put({ type: 'FETCH_FAILURE', payload: error.message });
    }
}
```

---

## 4️⃣ How do you apply Redux Thunk to a Redux store?
### **Answer:**
You apply Redux Thunk as a middleware when creating the Redux store using `applyMiddleware` from Redux.

### **Example:**
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
```

This allows action creators to return functions and execute async logic.

---

## 5️⃣ Can Redux Thunk be used for conditional dispatching?
### **Answer:**
Yes! Since Redux Thunk provides access to `getState`, we can conditionally dispatch actions based on the current state.

### **Example:**
```javascript
const fetchUserData = (userId) => {
    return (dispatch, getState) => {
        const { users } = getState();
        if (users[userId]) {
            return; // If user data already exists, don't fetch again
        }
        dispatch({ type: 'FETCH_USER_REQUEST' });
        fetch(`https://api.example.com/users/${userId}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'FETCH_USER_SUCCESS', payload: data }))
            .catch(error => dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message }));
    };
};
```

This prevents unnecessary API calls and improves performance.

---

### 🎯 **Conclusion:**
Redux Thunk is a powerful and lightweight middleware for handling asynchronous actions in Redux. It enables easy API calls, conditional dispatching, and integrates well with async/await. Understanding its internals, applying it to a store, and differentiating it from Redux Saga will help in real-world applications and interviews.

---

🚀 **Happy Coding!** 🎉


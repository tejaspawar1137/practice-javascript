import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((val) => val.id !== action.payload);
    case "CLEAR_ART":
      return [];
    default:
      return state;
  }
};

const UseReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: !cart?.length ? 0 : cart?.length + 1,
              name: "tejas",
              age: 32,
            },
          })
        }
      >
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_ART" })}>Clear All</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;

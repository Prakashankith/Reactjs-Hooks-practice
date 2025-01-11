import { useReducer } from "react";
import { useState } from "react";
export default function Hook7() {
  //   const [count, setCount] = useState(0);
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }

      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>count:{state.count}</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>increment</button> */}
      <button onClick={() => dispatch({ type: "increase" })}>increase</button>
      {/* <button onClick={() => setCount((prev) => prev - 1)}>decrease</button> */}
      <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>
      <br />
      <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        type="number"
      />
    </>
  );
}

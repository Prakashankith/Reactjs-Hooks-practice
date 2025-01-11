import { useCallback, useState } from "react";
import Header from "../Header";
export default function Hook6() {
  const [count, setCount] = useState(0);
  //   const newFn = () => {};
  const newFn = useCallback(() => {}, []);
  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click Here</button>
    </>
  );
}

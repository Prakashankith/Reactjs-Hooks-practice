import { useEffect, useState } from "react";
export default function Hook2() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(() => count / 2);
  }, [count]);
  return (
    <>
      <h1>count: {count} </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>-</button>
      <p>calculation:{calculation}</p>
    </>
  );
}

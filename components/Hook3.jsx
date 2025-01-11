import { useEffect, useRef, useState } from "react";

export default function Hook3() {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  //   console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //   const [count, setCout] = useState(0);
  //   useEffect(() => {
  //     setCout((prev) => prev + 1);
  //   });
  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render count:{count.current}</h1>
    </>
  );
}

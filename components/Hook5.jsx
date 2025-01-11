import { useMemo, useState } from "react";
export default function Hook5() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  function cubeNum() {
    console.log("calculation done!");
    return Math.pow(number, 3);
  }
  //   const result = cubeNum(number);
  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>cube of the number:{result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter++
      </button>
      <h1>counter:{counter}</h1>
    </>
  );
}

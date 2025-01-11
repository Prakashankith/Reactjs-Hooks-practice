import { useRef } from "react";

export default function Hook4() {
  const inputEle = useRef();
  const btnClicked = () => {
    console.log(inputEle.current);
    inputEle.current.Style.background = "blue";
  };
  return (
    <>
      <input type="text" ref={inputEle} />

      <button onClick={btnClicked}>click Here</button>
    </>
  );
}

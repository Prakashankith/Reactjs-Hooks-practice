import { useEffect, useLayoutEffect } from "react";

export default function Hook8() {
  useEffect(() => {
    console.log("message from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("message from useLayoutEffect");
  }, []);
  return (
    <>
      <h2>test message</h2>
      {Array(40000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </>
  );
}

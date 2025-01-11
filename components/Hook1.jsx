import { useState } from "react";
export default function Hook1() {
  //   const [color, setColor] = useState("red");
  //   const [model, setModel] = useState("Mustang");
  //   const [brand, setBrand] = useState("Ford");
  //   const [year, setYear] = useState("1964");
  const [car, setCar] = useState({
    color: "red",
    year: "1964",
    model: "mustang",
    brand: "ford",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        it is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={changeColor}>blue</button>
    </>
  );
}

import { useState } from "react";

export default function Form1() {
  const [inputs, setInputs] = useState({});
  const [textArea, setTextArea] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your Name
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your Age
        <input
          type="number"
          name="Age"
          value={inputs.Age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        enter your description
        <input
          type="text"
          name="textArea"
          value={inputs.textArea || ""}
          onChange={()=>setTextArea(event)}
        />
      </label>
    </form>
  );
}

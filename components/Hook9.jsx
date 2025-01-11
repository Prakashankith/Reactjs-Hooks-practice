import React from "react";
import useLocalStorage from "../hooks/LocalStorage";

export default function Hook9() {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userid", "");
  //   const [name, setName] = useState(
  //     localStorage.getItem("username") ? localStorage.getItem("username") : ""
  //   );
  //   useEffect(() => {
  //     localStorage.setItem("username", name);
  //   }, [name]);
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello{name}!</h2>
      <input
        type="text"
        placeholder="enter your id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>your id{id}!</h2>
    </>
  );
}

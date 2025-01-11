import React, { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const Footer = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h2>phone:{phone}</h2>
      <h3>name:{name}</h3>
    </div>
  );
};

export default Footer;

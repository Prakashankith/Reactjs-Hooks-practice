import React, { useContext } from "react";
import Contact from "./Contact";
import { AppContext } from "../context/Appcontext";

const Profile = () => {
  const { name, age } = useContext(AppContext);
  return (
    <div>
      <h2>Profile</h2>
      <Contact />
      <h2>name:{name}</h2>
    </div>
  );
};

export default Profile;

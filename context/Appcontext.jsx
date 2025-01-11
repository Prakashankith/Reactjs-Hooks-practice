import { createContext } from "react";
export const AppContext = createContext();
const contextProvider = (props) => {
  const phone = "9986949581";
  const name = "ankith";
  const age = "25";
  return (
    <AppContext.Provider value={{ phone, name, age }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default contextProvider;

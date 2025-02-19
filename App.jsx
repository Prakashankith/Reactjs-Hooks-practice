// import { useReducer } from "react";

// function reducer(state, action) {
//   console.log(state.action);
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 10 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     default:
//       return "unauthirized command";
//   }
// }
// const initialState = { count: 25 };
// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   function handleIncrement() {
//     dispatch({ type: "increment" });
//   }
//   function handleDecrement() {
//     dispatch({ type: "decrement" });
//   }
//   return (
//     <>
//       <h1>Count: {state.count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// }

// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [isEven, setIsEven] = useState(false);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>{isEven ? "Even" : "Odd"}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
//     </div>
//   );
// };

// export default Counter;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   function validateform() {
//     function validateForm() {
//       // Check if the First Name is an Empty string or not.

//       if (firstName.length == 0) {
//         alert("Invalid Form, First Name can not be empty");
//         return;
//       }

//       // Check if the Email is an Empty string or not.

//       if (email.length == 0) {
//         alert("Invalid Form, Email Address can not be empty");
//         return;
//       }

//       // check if the password follows constraints or not.

//       // if password length is less than 8 characters, alert invalid form.

//       if (password.length < 8) {
//         alert(
//           "Invalid Form, Password must contain greater than or equal to 8 characters."
//         );
//         return;
//       }

//       // variable to count upper case characters in the password.
//       let countUpperCase = 0;
//       // variable to count lowercase characters in the password.
//       let countLowerCase = 0;
//       // variable to count digit characters in the password.
//       let countDigit = 0;
//       // variable to count special characters in the password.
//       let countSpecialCharacters = 0;

//       for (let i = 0; i < password.length; i++) {
//         const specialChars = [
//           "!",
//           "@",
//           "#",
//           "$",
//           "%",
//           "^",
//           "&",
//           "*",
//           "(",
//           ")",
//           "_",
//           "-",
//           "+",
//           "=",
//           "[",
//           "{",
//           "]",
//           "}",
//           ":",
//           ";",
//           "<",
//           ">",
//         ];

//         if (specialChars.includes(password[i])) {
//           // this means that the character is special, so increment countSpecialCharacters
//           countSpecialCharacters++;
//         } else if (!isNaN(password[i] * 1)) {
//           // this means that the character is a digit, so increment countDigit
//           countDigit++;
//         } else {
//           if (password[i] == password[i].toUpperCase()) {
//             // this means that the character is an upper case character, so increment countUpperCase
//             countUpperCase++;
//           }
//           if (password[i] == password[i].toLowerCase()) {
//             // this means that the character is lowercase, so increment countUpperCase
//             countLowerCase++;
//           }
//         }
//       }

//       if (countLowerCase == 0) {
//         // invalid form, 0 lowercase characters
//         alert("Invalid Form, 0 lower case characters in password");
//         return;
//       }

//       if (countUpperCase == 0) {
//         // invalid form, 0 upper case characters
//         alert("Invalid Form, 0 upper case characters in password");
//         return;
//       }

//       if (countDigit == 0) {
//         // invalid form, 0 digit characters
//         alert("Invalid Form, 0 digit characters in password");
//         return;
//       }

//       if (countSpecialCharacters == 0) {
//         // invalid form, 0 special characters characters
//         alert("Invalid Form, 0 special characters in password");
//         return;
//       }

//       // if all the conditions are valid, this means that the form is valid

//       alert("Form is valid");
//     }
//   }

//   return (
//     <form action="">
//       <div className="main">
//         <label htmlFor="FirstName">Firstname:</label>
//         <input
//           // type="text"
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />{" "}
//         <br />
//         <br />
//         <label htmlFor="Last Name">Last Name:</label>
//         <input
//           // type="text"
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <br />
//         <br />
//         <label htmlFor="Mobile">Mobile:</label>
//         <input
//           type="tel"
//           placeholder="Mobile"
//           onChange={(e) => setMobile(e.target.value)}
//         />
//         <br />
//         <br />
//         <label htmlFor="Email">Email:</label>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <br />
//         <label htmlFor="Age">Age:</label>
//         <input
//           type="number"
//           placeholder="Mobile"
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <br />
//         <br />
//         <label htmlFor="Password">Password:</label>
//         <input
//           type="text"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <button
//           type="submit"
//           onClick={() => {
//             validateform;
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

// export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [firstName, setFirstName] = useState(""); // useState to store First Name
//   const [lastName, setLastName] = useState(""); // useState to store Last Name
//   const [mobile, setMobile] = useState(""); // useState to store Mobile Number
//   const [age, setAge] = useState(""); // useState to store Age
//   const [email, setEmail] = useState(""); // useState to store Email address of the user
//   const [password, setPassword] = useState(""); // useState to store Password

//   // Function which will validate the input data whenever submit button is clicked.

//   function validateForm() {
//     // Check if the First Name is an Empty string or not.

//     if (firstName.length == 0) {
//       alert("Invalid Form, First Name can not be empty");
//       return;
//     }

//     // Check if the Email is an Empty string or not.

//     if (email.length == 0) {
//       alert("Invalid Form, Email Address can not be empty");
//       return;
//     }

//     // check if the password follows constraints or not.

//     // if password length is less than 8 characters, alert invalid form.

//     if (password.length < 8) {
//       alert(
//         "Invalid Form, Password must contain greater than or equal to 8 characters."
//       );
//       return;
//     }

//     // variable to count upper case characters in the password.
//     let countUpperCase = 0;
//     // variable to count lowercase characters in the password.
//     let countLowerCase = 0;
//     // variable to count digit characters in the password.
//     let countDigit = 0;
//     // variable to count special characters in the password.
//     let countSpecialCharacters = 0;

//     for (let i = 0; i < password.length; i++) {
//       const specialChars = [
//         "!",
//         "@",
//         "#",
//         "$",
//         "%",
//         "^",
//         "&",
//         "*",
//         "(",
//         ")",
//         "_",
//         "-",
//         "+",
//         "=",
//         "[",
//         "{",
//         "]",
//         "}",
//         ":",
//         ";",
//         "<",
//         ">",
//       ];

//       if (specialChars.includes(password[i])) {
//         // this means that the character is special, so increment countSpecialCharacters
//         countSpecialCharacters++;
//       } else if (!isNaN(password[i] * 1)) {
//         // this means that the character is a digit, so increment countDigit
//         countDigit++;
//       } else {
//         if (password[i] == password[i].toUpperCase()) {
//           // this means that the character is an upper case character, so increment countUpperCase
//           countUpperCase++;
//         }
//         if (password[i] == password[i].toLowerCase()) {
//           // this means that the character is lowercase, so increment countUpperCase
//           countLowerCase++;
//         }
//       }
//     }

//     if (countLowerCase == 0) {
//       // invalid form, 0 lowercase characters
//       alert("Invalid Form, 0 lower case characters in password");
//       return;
//     }

//     if (countUpperCase == 0) {
//       // invalid form, 0 upper case characters
//       alert("Invalid Form, 0 upper case characters in password");
//       return;
//     }

//     if (countDigit == 0) {
//       // invalid form, 0 digit characters
//       alert("Invalid Form, 0 digit characters in password");
//       return;
//     }

//     if (countSpecialCharacters == 0) {
//       // invalid form, 0 special characters characters
//       alert("Invalid Form, 0 special characters in password");
//       return;
//     }

//     // if all the conditions are valid, this means that the form is valid

//     alert("Form is valid");
//   }

//   return (
//     <div className="main">
//       <form>
//         {/* Input Field to insert First Name */}
//         <input
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         {/* Input Field to insert Last Name */}
//         <input
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         {/* Input Field to insert Mobile Number */}
//         <input
//           placeholder="Mobile Number"
//           onChange={(e) => setMobile(e.target.value)}
//         />
//         {/* Input Field to insert Age */}
//         <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
//         {/* Input Field to insert Email Address of the user */}
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         {/* Input Field to insert Password */}
//         <input
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             validateForm();
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import Form from "./components/Form.jsx";
import Form1 from "./components/Form1.jsx";
import Hook1 from "./components/Hook1.jsx";
import Hook2 from "./components/Hook2.jsx";
import Hook3 from "./components/Hook3.jsx";
import Hook4 from "./components/Hoo4.jsx";
import Hook5 from "./components/Hook5.jsx";
import Hook6 from "./components/Hook6.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Hook7 from "./components/Hook7.jsx";
import Hook8 from "./components/Hook8.jsx";
import Hook9 from "./components/Hook9.jsx";

const App = () => {
  return (
    <div>
      {/* <Form1 />; */}
      {/* <Hook1 /> */}
      {/* <Hook3 /> */}
      {/* <Hook6 /> */}

      {/* <Profile />
      <Footer /> */}
      <Hook9 />
    </div>
  );
};

export default App;

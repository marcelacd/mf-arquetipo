import React from "react";
import ReactDOM from "react-dom/client";
import Ejemplo from "./components/Ejemplo"
// import "./index.css";

const App = () => (
  <Ejemplo/>
  // <div className="container">
  //   <div>Name: host</div>
  //   <div>Framework: react</div>
  //   <div>Language: JavaScript</div>
  //   <div>CSS: Empty CSS</div>
  // </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
